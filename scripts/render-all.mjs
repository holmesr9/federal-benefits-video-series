#!/usr/bin/env node
// Renders all 7 videos to out/
import { execSync } from "child_process";
import { mkdirSync } from "fs";

const VIDEOS = [
  "video1-hook",
  "video2-basics",
  "video3-change",
  "video4-impact",
  "video5-deadline",
  "video6-action-plan",
  "video7-big-picture",
];

mkdirSync("out", { recursive: true });

for (const id of VIDEOS) {
  console.log(`\n▶ Rendering ${id}...`);
  execSync(
    `npx remotion render src/index.ts ${id} out/${id}.mp4 --codec=h264`,
    { stdio: "inherit" }
  );
  console.log(`✓ Done: out/${id}.mp4`);
}

console.log("\n✅ All 7 videos rendered to out/");
