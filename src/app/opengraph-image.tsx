import { ImageResponse } from "next/og";

export const alt = "Sumit Sharma — Design engineer and product builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "64px 80px",
        background: "#ffffff",
        color: "#1d1d20",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 25 }}
      >
        <span style={{ color: "#477452", fontWeight: 700, fontSize: 40 }}>
          ✳
        </span>
        Sumit Sharma
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          fontWeight: 600,
          letterSpacing: "-4px",
          lineHeight: 1.15,
        }}
      >
        <span>Hey, I’m Sumit.</span>
        <span style={{ color: "#69696e", fontSize: 40, letterSpacing: "-1px" }}>Designing and building for the web.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #deddd8",
          paddingTop: 25,
          fontSize: 22,
          color: "#69696e",
        }}
      >
        <span>Design engineer & product builder</span>
        <span>sumitsharma.pro</span>
      </div>
    </div>,
    size,
  );
}
