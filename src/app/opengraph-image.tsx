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
          background: "#241a16",
          padding: "0 80px",
        }}
      >
        <svg width="108" height="108" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="12" fill="#201914"/>
            <path d="M25 6c1 9 11 12 11 22a12 12 0 0 1-24 0c0-5 2-9 6-13 0 4 1 6 3 7 3-4 5-9 4-16Z" fill="#ff8755"/>
            <path d="M19 26v8m10-8v8m-10-4h10" fill="none" stroke="#201914" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
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
          Run your gym from one place.
        </div>
      </div>
    ),
    { ...size }
  );
}
