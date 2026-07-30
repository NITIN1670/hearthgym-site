import { ImageResponse } from "next/og";

// Required for `output: "export"` — declares this image can be fully
// pre-rendered to a static file at build time (there's no per-request
// server to generate it dynamically).
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#2B1710",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#FDF8F3",
            letterSpacing: "-0.02em",
          }}
        >
          HearthGym
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 28,
            color: "#F3D9BF",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Software that keeps your gym&apos;s fire burning.
        </div>
      </div>
    ),
    { ...size }
  );
}
