import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

type Props = {
  high3Annual: number;
  high5Annual: number;
  yearsOfService: number;
  salary: number;
};

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const FormulaScene: React.FC<Props> = ({
  high3Annual,
  high5Annual,
  yearsOfService,
  salary,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const rowDelay = fps * 0.3;

  const row1Opacity = interpolate(frame, [0, fps * 0.4], [0, 1], { extrapolateRight: "clamp" });
  const row2Opacity = interpolate(frame, [rowDelay, rowDelay + fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });
  const row3Opacity = interpolate(frame, [rowDelay * 2, rowDelay * 2 + fps * 0.4], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

  const diff = high3Annual - high5Annual;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #0a1628 0%, #1a2a4a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 60px",
        fontFamily: "'Georgia', serif",
        gap: 40,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{ color: "#C8A84B", fontSize: 32, fontWeight: "bold", letterSpacing: 4, textTransform: "uppercase" }}
      >
        High-3 vs. High-5 Comparison
      </div>
      <div
        style={{
          color: "#8899aa",
          fontSize: 26,
          textAlign: "center",
        }}
      >
        GS-12 · {fmt(salary)}/yr · {yearsOfService} years of service
      </div>

      {/* Comparison rows */}
      {[
        { label: "High-3 Annuity", value: fmt(high3Annual), color: "#4CAF50", opacity: row1Opacity },
        { label: "High-5 Annuity", value: fmt(high5Annual), color: "#F44336", opacity: row2Opacity },
        { label: "Annual Difference", value: `−${fmt(diff)}`, color: "#FF9800", opacity: row3Opacity },
      ].map(({ label, value, color, opacity }) => (
        <div
          key={label}
          style={{
            opacity,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 14,
            padding: "32px 48px",
            borderLeft: `6px solid ${color}`,
          }}
        >
          <div style={{ color: "#ccd8e8", fontSize: 34 }}>{label}</div>
          <div style={{ color, fontSize: 44, fontWeight: "bold" }}>{value}</div>
        </div>
      ))}

      <div
        style={{
          opacity: row3Opacity,
          color: "#FF9800",
          fontSize: 28,
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Over 25 years of retirement: {fmt(diff * 25)} lost
      </div>
    </div>
  );
};
