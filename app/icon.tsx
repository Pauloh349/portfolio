import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "linear-gradient(135deg, #0f172a 0%, #16a34a 100%)",
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "-0.5px",
        }}
      >
        PM
      </div>
    ),
    {
      ...size,
    },
  );
}
