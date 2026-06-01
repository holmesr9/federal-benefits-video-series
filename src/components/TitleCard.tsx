import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

type Props = {
  videoNumber: number;
  title: string;
  subtitle: string;
  accentColor?: string;
};

export const TitleCard: React.FC<Props> = ({
  videoNumber,
  title,
  subtitle,
  accentColor = "#C8A84B",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, fps * 0.6], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const scaleIn = interpolate(frame, [0, fps * 0.6], [0.92, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.back(1.2)),
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, #061020 0%, #0a1a35 50%, #061020 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        fontFamily: "'Georgia', serif",
        boxSizing: "border-box",
        gap: 40,
      }}
    >
      {/* Eagle / series badge */}
      <div
        style={{
          opacity: fadeIn,
          color: accentColor,
          fontSize: 26,
          letterSpacing: 6,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Federal Benefits Resource
      </div>

      {/* Divider */}
      <div
        style={{
          opacity: fadeIn,
          width: 100,
          height: 3,
          background: accentColor,
          borderRadius: 2,
        }}
      />

      {/* Video number */}
      <div
        style={{
          opacity: fadeIn,
          color: "#556677",
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
        }}
      >
        Video {videoNumber} of 7
      </div>

      {/* Main title */}
      <div
        style={{
          opacity: fadeIn,
          transform: `scale(${scaleIn})`,
          color: "#ffffff",
          fontSize: 72,
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 1.15,
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: fadeIn,
          color: "#aabbcc",
          fontSize: 34,
          textAlign: "center",
          lineHeight: 1.5,
          fontStyle: "italic",
          maxWidth: 800,
        }}
      >
        "{subtitle}"
      </div>
    </div>
  );
};
