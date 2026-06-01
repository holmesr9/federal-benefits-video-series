import React from "react";
import { Composition, Folder } from "remotion";
import { VideoTemplate } from "./videos/VideoTemplate";
import { FormulaScene } from "./components/FormulaScene";
import { CountdownScene } from "./components/CountdownScene";
import { SERIES } from "./data/series";

const FPS = 30;
const WIDTH = 1080;
const HEIGHT = 1920;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Federal Benefits Series">
        {SERIES.map((video, i) => (
          <Composition
            key={video.id}
            id={video.id}
            component={VideoTemplate}
            defaultProps={{ video, videoNumber: i + 1 }}
            fps={FPS}
            width={WIDTH}
            height={HEIGHT}
            durationInFrames={video.durationSecs * FPS}
          />
        ))}
      </Folder>

      {/* Utility compositions for animated infographic scenes */}
      <Folder name="Infographics">
        <Composition
          id="formula-comparison"
          component={FormulaScene}
          defaultProps={{
            high3Annual: 18750,
            high5Annual: 17500,
            yearsOfService: 25,
            salary: 75000,
          }}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          durationInFrames={FPS * 10}
        />
        <Composition
          id="deadline-countdown"
          component={CountdownScene}
          defaultProps={{}}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
          durationInFrames={FPS * 8}
        />
      </Folder>
    </>
  );
};
