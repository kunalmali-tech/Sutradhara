import { ImageResponse } from "next/og";

export const alt = "TheSutraDhara — Wisdom. Wellness. Wholeness.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLACK = "#060A07";
const RED = "#E8831A";
const WHITE = "#F5EDD8";
const MUTED = "#8FA089";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: BLACK,
        }}
      >
        {/* Radial glow, top right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${RED}33 0%, ${RED}00 70%)`,
            display: "flex",
          }}
        />
        {/* Diagonal accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 260,
            height: "100%",
            background: `linear-gradient(135deg, transparent 45%, ${RED}22 45%)`,
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            marginBottom: 28,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 46,
              height: 46,
              border: `4px solid ${RED}`,
              transform: "rotate(45deg)",
              display: "flex",
            }}
          />
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: RED,
              display: "flex",
            }}
          />
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: 6,
            color: WHITE,
          }}
        >
          THESUTRA<span style={{ color: RED, display: "flex" }}>DHARA</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 26,
            letterSpacing: 10,
            color: MUTED,
            textTransform: "uppercase",
          }}
        >
          Wisdom · Wellness · Wholeness
        </div>

        {/* Location line */}
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 18,
            letterSpacing: 3,
            color: RED,
            textTransform: "uppercase",
          }}
        >
          VimanNagar, Pune
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: RED,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
