import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#081023",
          color: "#4CF7FF",
          border: "2px solid #4CF7FF",
          borderRadius: "10px",
          fontSize: 28,
          fontFamily: "monospace"
        }}
      >
        AB
      </div>
    ),
    {
      ...size
    }
  );
}
