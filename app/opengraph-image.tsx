import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "Skanda Pictures — Independent Tamil Film Production";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await fs.readFile(
    path.join(process.cwd(), "public/images/logo-mark.jpg")
  );
  const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;

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
          background: "#0c0a08",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 80% -10%, rgba(198,154,60,0.18), transparent)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={110} height={170} style={{ objectFit: "contain" }} />
        <div
          style={{
            marginTop: 36,
            fontSize: 66,
            color: "#f2ecdd",
            letterSpacing: 2,
            display: "flex",
            gap: 20,
          }}
        >
          <span>Skanda</span>
          <span style={{ color: "#c69a3c" }}>Pictures</span>
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            color: "#94897a",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Stories meet strategy
        </div>
      </div>
    ),
    { ...size }
  );
}
