import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig, Audio, staticFile } from "remotion";
import { TitleCard } from "../components/TitleCard";
import { SceneCard } from "../components/SceneCard";
import { VideoData } from "../data/series";

type Props = {
  video: VideoData;
  videoNumber: number;
  /** Frames to spend on the title card */
  titleFrames?: number;
  /** Frames per scene (overrides even distribution) */
  framesPerScene?: number;
};

export const VideoTemplate: React.FC<Props> = ({
  video,
  videoNumber,
  titleFrames,
  framesPerScene,
}) => {
  const { fps, durationInFrames } = useVideoConfig();
  const titleDuration = titleFrames ?? fps * 3;
  const remainingFrames = durationInFrames - titleDuration;
  const sceneDuration = framesPerScene ?? Math.floor(remainingFrames / video.scenes.length);

  return (
    <AbsoluteFill style={{ background: "#0a1628" }}>
      {/* Title card */}
      <Sequence from={0} durationInFrames={titleDuration}>
        <TitleCard
          videoNumber={videoNumber}
          title={video.title}
          subtitle={video.subtitle}
        />
      </Sequence>

      {/* Scenes */}
      {video.scenes.map((scene, i) => {
        const from = titleDuration + i * sceneDuration;
        return (
          <Sequence key={i} from={from} durationInFrames={sceneDuration}>
            <SceneCard
              sceneNumber={i + 1}
              totalScenes={video.scenes.length}
              visual={scene.visual}
              script={scene.script}
            />
            {/* Drop voiceover MP3s into public/voiceover/{id}/scene{n}.mp3 */}
            <Audio
              src={staticFile(`voiceover/${video.id}/scene${i + 1}.mp3`)}
              volume={1}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
