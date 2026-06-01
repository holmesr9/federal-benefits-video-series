import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

type Props = {
  sceneNumber: number;
  totalScenes: number;
  visual: string;
  script: string;
  accentColor?: string;
};

export const SceneCard: React.FC<Props> = ({
  sceneNumber,
  totalScenes,
  visual,
  script,
  accentColor = "#C8A84B",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const slideUp = interpolate(frame, [0, fps * 0.4], [40, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #0a1628 0%, #1a2a4a 60%, #0d1f38 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 60px",
        fontFamily: "'Georgia', serif",
        boxSizing: "border-box",
      }}
    >
      {/* Top badge */}
      <div
        style={{
          opacity: fadeIn,
          display: "flex",
          alignItems: "center",
          gap: 16,
          alignSelf: "flex-start",
        }}
      >
        <div
          style={{
            width: 6,
            height: 48,
            background: accentColor,
            borderRadius: 3,
          }}
        />
        <div>
          <div
            style={{
              color: accentColor,
              fontSize: 28,
              fontWeight: "bold",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Federal Benefits Resource
          </div>
          <div style={{ color: "#8899aa", fontSize: 22, marginTop: 4 }}>
            Scene {sceneNumber} of {totalScenes}
          </div>
        </div>
      </div>

      {/* Visual description box */}
      <div
        style={{
          opacity: fadeIn,
          transform: `translateY(${slideUp}px)`,
          width: "100%",
          background: "rgba(200, 168, 75, 0.08)",
          border: `2px solid ${accentColor}44`,
          borderRadius: 16,
          padding: "36px 44px",
        }}
      >
        <div
          style={{
            color: accentColor,
            fontSize: 22,
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Visual
        </div>
        <div
          style={{
            color: "#aabbcc",
            fontSize: 28,
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          {visual}
        </div>
      </div>

      {/* Script / voiceover */}
      <div
        style={{
          opacity: fadeIn,
          transform: `translateY(${slideUp}px)`,
          width: "100%",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 16,
          padding: "36px 44px",
          borderLeft: `6px solid ${accentColor}`,
        }}
      >
        <div
          style={{
            color: accentColor,
            fontSize: 22,
            fontWeight: "bold",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Voiceover
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 34,
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {script}
        </div>
      </div>
    </div>
  );
};
