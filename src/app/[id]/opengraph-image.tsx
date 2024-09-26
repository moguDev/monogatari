import { db } from "@/lib/firebase/firebase";
import { Item } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

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
  const fontBokutachi = path.join(process.cwd(), "/public/fonts/bokutachi.otf");
  const fontBokutachiData = fs.readFileSync(fontBokutachi);
  const fontBuilding = path.join(
    process.cwd(),
    "/public/fonts/Buildingsandundertherailwaytracksfree_ver.otf"
  );
  const fontBuildingData = fs.readFileSync(fontBuilding);

  // ピン画像の読み込み
  const imagePath = path.join(process.cwd(), "public/images/pin.png");
  const imageData = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageData.toString("base64")}`;

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "24px" }}>{item.description}</p>
            <p style={{ width: "100%", textAlign: "end" }}>{item.userName}</p>
          </div>
          <div
            style={{
              position: "absolute",
              top: -10,
              left: 180,
              display: "flex",
              width: "45px",
              height: "45px",
              zIndex: 999,
            }}
          >
            <img
              src={base64Image}
              alt="pin_image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              fontSize: "64px",
              fontFamily: '"building", sans-serif',
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 96,
                left: 15,
                width: "100%",
                height: "20px",
                backgroundColor: "#F59E0B80",
              }}
            />
            <p style={{ transform: "translateY(-24px)" }}>
              あなたの考える使い道は？？？
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
