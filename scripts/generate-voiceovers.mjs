#!/usr/bin/env node
/**
 * Generates voiceover MP3s for all scenes using ElevenLabs.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=your_key node scripts/generate-voiceovers.mjs
 *
 * Optional flags:
 *   --video video1-hook        Only generate for one video
 *   --scene 3                  Only generate scene N (requires --video)
 *   --force                    Re-generate even if file already exists
 *
 * Output: public/voiceover/{video-id}/scene{n}.mp3
 *
 * Voice: Daniel (British, authoritative) — ElevenLabs voice ID below.
 * To use a different voice, replace VOICE_ID with one from:
 *   https://elevenlabs.io/voice-library
 */

import { ElevenLabsClient } from "elevenlabs";
import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// Daniel — British male, authoritative
const VOICE_ID = "onwK4e9ZLuTAKqWW03F9"; // Daniel (ElevenLabs)

const MODEL_ID = "eleven_turbo_v2_5"; // fast + high quality

const VOICE_SETTINGS = {
  stability: 0.55,
  similarity_boost: 0.85,
  style: 0.2,
  use_speaker_boost: true,
};

// --- Parse CLI args ---
const args = process.argv.slice(2);
const filterVideo = args.includes("--video") ? args[args.indexOf("--video") + 1] : null;
const filterScene = args.includes("--scene") ? parseInt(args[args.indexOf("--scene") + 1], 10) : null;
const force = args.includes("--force");

// --- Load series data (strip TS types at runtime via simple regex) ---
// We import the compiled-in-memory version by reading the TS and stripping types.
// In production you'd use tsx or compile first; here we use a lightweight approach.
import { createRequire } from "module";

// Dynamically import series data using a small inline loader
const seriesPath = join(ROOT, "src/data/series.ts");
const { readFileSync } = await import("fs");
const raw = readFileSync(seriesPath, "utf8");

// Strip TypeScript syntax for runtime use
const stripped = raw
  .replace(/^export type[\s\S]*?^};/gm, "")
  .replace(/: VideoData\[\]/g, "")
  .replace(/: VideoData/g, "")
  .replace(/: Scene/g, "")
  .replace(/: string/g, "")
  .replace(/: number/g, "")
  .replace(/export const/g, "const");

// Use a data module approach — write stripped JS to temp and import
import { writeFileSync as wfs, unlinkSync } from "fs";
const tmpPath = join(ROOT, ".series-tmp.mjs");
wfs(tmpPath, stripped + "\nexport { SERIES };");
const { SERIES } = await import(tmpPath);
unlinkSync(tmpPath);

// --- Validate API key ---
const apiKey = process.env.ELEVENLABS_API_KEY;
if (!apiKey) {
  console.error("❌ Missing ELEVENLABS_API_KEY environment variable.");
  console.error("   Export it before running: export ELEVENLABS_API_KEY=your_key_here");
  process.exit(1);
}

const client = new ElevenLabsClient({ apiKey });

// --- Generate ---
let total = 0;
let skipped = 0;
let generated = 0;
let errors = 0;

for (const video of SERIES) {
  if (filterVideo && video.id !== filterVideo) continue;

  const dir = join(ROOT, "public", "voiceover", video.id);
  mkdirSync(dir, { recursive: true });

  for (let i = 0; i < video.scenes.length; i++) {
    const sceneNum = i + 1;
    if (filterScene !== null && sceneNum !== filterScene) continue;

    total++;
    const outPath = join(dir, `scene${sceneNum}.mp3`);

    if (!force && existsSync(outPath)) {
      console.log(`⏭  Skipping ${video.id}/scene${sceneNum}.mp3 (already exists)`);
      skipped++;
      continue;
    }

    const text = video.scenes[i].script;
    console.log(`🎙  Generating ${video.id}/scene${sceneNum}.mp3 ...`);
    console.log(`    "${text.slice(0, 80)}${text.length > 80 ? "…" : ""}"`);

    try {
      const audioStream = await client.textToSpeech.convert(VOICE_ID, {
        text,
        model_id: MODEL_ID,
        voice_settings: VOICE_SETTINGS,
        output_format: "mp3_44100_128",
      });

      // Collect stream into buffer
      const chunks = [];
      for await (const chunk of audioStream) {
        chunks.push(chunk);
      }
      const buffer = Buffer.concat(chunks);
      writeFileSync(outPath, buffer);

      console.log(`    ✓ Saved (${(buffer.length / 1024).toFixed(1)} KB)`);
      generated++;

      // Small delay to be kind to the API
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`    ✗ Error: ${err.message}`);
      errors++;
    }
  }
}

console.log(`\n${"─".repeat(50)}`);
console.log(`Total scenes: ${total}`);
console.log(`Generated:    ${generated}`);
console.log(`Skipped:      ${skipped}`);
console.log(`Errors:       ${errors}`);

if (errors > 0) {
  console.log("\n⚠️  Some scenes failed. Re-run with --force to retry failed ones.");
  process.exit(1);
} else {
  console.log("\n✅ All voiceovers ready. Run `npm run studio` to preview.");
}
