import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";

const DEADLINE = new Date("2028-01-01").getTime();

export const CountdownScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Simulate time passing: each frame = 1 day
  const simulatedDate = new Date(Date.now() + frame * 86400000);
  const msLeft = Math.max(0, DEADLINE - simulatedDate.getTime());
  const daysLeft = Math.floor(msLeft / 86400000);
  const months = Math.floor(daysLeft / 30);
  const days = daysLeft % 30;

  const pulse = interpolate(Math.sin((frame / fps) * Math.PI * 2), [-1, 1], [0.95, 1.05]);

  const fadeIn = interpolate(frame, [0, fps * 0.5], [0, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, #1a0000 0%, #0d1020 60%, #0a1628 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        gap: 40,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          opacity: fadeIn,
          color: "#FF4444",
          fontSize: 30,
          letterSpacing: 6,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Proposed Deadline
      </div>

      <div
        style={{
          opacity: fadeIn,
          transform: `scale(${pulse})`,
          color: "#FF4444",
          fontSize: 100,
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: 1,
        }}
      >
        January 1<br />2028
      </div>

      <div
        style={{
          opacity: fadeIn,
          display: "flex",
          gap: 40,
        }}
      >
        {[
          { value: months, label: "Months" },
          { value: days, label: "Days" },
        ].map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: "rgba(255,68,68,0.12)",
              border: "2px solid #FF4444",
              borderRadius: 16,
              padding: "24px 48px",
              textAlign: "center",
            }}
          >
            <div style={{ color: "#FF4444", fontSize: 64, fontWeight: "bold" }}>{value}</div>
            <div style={{ color: "#aabbcc", fontSize: 26 }}>{label}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          opacity: fadeIn,
          color: "#aabbcc",
          fontSize: 28,
          textAlign: "center",
          maxWidth: 700,
          lineHeight: 1.5,
          fontStyle: "italic",
        }}
      >
        Retire before this date and keep High-3 permanently
      </div>
    </div>
  );
};
