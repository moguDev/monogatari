import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

// IP アドレスを取得する関数
const getClientIp = (request: NextRequest): string => {
  const ip = request.headers.get("x-forwarded-for") || request.ip || "";
  return ip.split(",")[0];
};

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const userIp = getClientIp(request); // クライアントの IP アドレスを取得

    // Firestore にデータを保存
    const docRef = await addDoc(collection(db, "favorites"), {
      userIp,
      postId,
      timestamp: serverTimestamp(),
    });

    return NextResponse.json(
      { message: "Favorite added", id: docRef.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Error adding favorite" },
      { status: 500 }
    );
  }
}
