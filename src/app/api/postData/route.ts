import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase/firebase"; // Firebaseの設定ファイルを適宜調整してください
import { collection, addDoc } from "firebase/firestore";

// POSTリクエストを処理するためのエンドポイント
export async function POST(req: NextRequest) {
  try {
    // リクエストボディをパース
    const { itemId, userName, body } = await req.json();

    if (!itemId || !userName || !body) {
      return NextResponse.json(
        { error: "Missing name or message" },
        { status: 400 }
      );
    }

    // Firestoreのコレクションにデータを追加
    const docRef = await addDoc(collection(db, "posts"), {
      itemId,
      userName,
      body,
      timestamp: new Date(),
    });

    // 成功レスポンスを返す
    return NextResponse.json(
      { id: docRef.id, message: "Data added successfully" },
      { status: 200 }
    );
  } catch (error) {
    // エラーレスポンスを返す
    return NextResponse.json(
      { error: "Error adding document", details: error },
      { status: 500 }
    );
  }
}
