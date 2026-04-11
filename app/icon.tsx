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
          background: "#0b0b0b",
          color: "#f5f5f5",
          border: "2px solid #f5f5f5",
          borderRadius: "10px",
          fontSize: 20,
          letterSpacing: "-0.02em",
          fontFamily: "monospace"
        }}
      >
        {"</>"}
      </div>
    ),
    {
      ...size
    }
  );
}
