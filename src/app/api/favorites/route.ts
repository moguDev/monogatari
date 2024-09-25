import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

const getClientIp = (request: NextRequest): string => {
  const ip = request.headers.get("x-forwarded-for") || request.ip || "";
  return ip.split(",")[0];
};

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const userIp = getClientIp(request); // クライアントの IP アドレスを取得

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

export async function DELETE(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const userIp = getClientIp(request);

    const q = query(
      collection(db, "favorites"),
      where("userIp", "==", userIp),
      where("postId", "==", postId)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { message: "Favorite not found" },
        { status: 404 }
      );
    }

    const batch = querySnapshot.docs.map((docSnap) =>
      deleteDoc(doc(db, "favorites", docSnap.id))
    );

    await Promise.all(batch);

    return NextResponse.json({ message: "Favorite removed" }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Error removing favorite" },
      { status: 500 }
    );
  }
}
