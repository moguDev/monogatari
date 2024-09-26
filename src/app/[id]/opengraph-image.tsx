import { db } from "@/lib/firebase/firebase";
import { Item } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "About Acme";
export const contentType = "image/png";

async function loadFont(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch font: ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

export default async function OpengraphImage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const docRef = doc(db, "items", id);
  const docSnap = await getDoc(docRef);
  const item: Item = { id: id, ...docSnap.data() } as Item;

  // フォントの読み込み
  const fontBokutachiUrl = "https://モノがたり.com/fonts/bokutachi.otf";
  const fontBuildingUrl =
    "https://モノがたり.com/fonts/Buildingsandundertherailwaytracksfree_ver.otf";
  const fontBokutachiData = await loadFont(fontBokutachiUrl);
  const fontBuildingData = await loadFont(fontBuildingUrl);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#d7dcd8",
          padding: "30px",
          color: "#213854",
          fontFamily: '"bokutachi", sans-serif',
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f1f1f1",
            padding: "25px",
            marginLeft: "40px",
            transform: "rotate(-2deg)",
            boxShadow: "5px 6px #21385433",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "350px",
              height: "350px",
            }}
          >
            <img
              src={item.imageUrl}
              alt={id}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <p style={{ fontSize: "22px", lineHeight: "32px", width: "350px" }}>
            {item.description}
          </p>
          <div
            style={{
              position: "absolute",
              top: -10,
              right: 0,
              display: "flex",
              height: "48px",
              padding: "10px",
              backgroundColor: "#fb923c",
              color: "#f1f1f1",
              zIndex: 999,
              transform: "translateY(10px) rotate(4deg)",
            }}
          >
            <p
              style={{
                fontSize: "32px",
                fontFamily: '"building", sans-serif',
                transform: "translateY(-24px)",
              }}
            >
              求ム！使い道
            </p>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "20px",
            fontFamily: '"building", sans-serif',
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              fontSize: "64px",
              margin: 10,
              padding: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 35,
                left: 15,
                width: "100%",
                height: "20px",
                margin: 0,
                padding: 0,
                backgroundColor: "#F59E0B80",
              }}
            />
            <p
              style={{ transform: "translateY(-24px)", margin: 0, padding: 0 }}
            >
              あなたの考える使い道は？？？
            </p>
          </div>
          <p
            style={{
              fontSize: "36px",
              margin: "0 0 0 20px",
              padding: 0,
            }}
          >
            思い入れがあって捨てられない...
          </p>
          <p
            style={{
              fontSize: "36px",
              margin: "0 0 0 20px",
              padding: 0,
            }}
          >
            そんな
            <span style={{ fontSize: "44px", transform: "translateY(-10px)" }}>
              「モノ」
            </span>
            の使い道みんなで考えましょう！
          </p>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <p
              style={{
                fontSize: "56px",
                margin: "0 0 0 20px",
                padding: 0,
              }}
            >
              モノがたり
            </p>
            <p
              style={{
                fontSize: "20px",
                margin: "0 0 0 20px",
                padding: 0,
              }}
            >
              捨てられない「モノ」の使い道をみんなで考えるアプリ
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "bokutachi",
          data: fontBokutachiData,
          style: "normal",
        },
        {
          name: "building",
          data: fontBuildingData,
          style: "normal",
        },
      ],
    }
  );
}
