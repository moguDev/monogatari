import { NextRequest, NextResponse } from "next/server";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

const getClientIp = (request: NextRequest): string => {
  const ip = request.headers.get("x-forwarded-for") || request.ip || "";
  return ip.split(",")[0];
};

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json();
    const userIp = getClientIp(request);

    const favoritesRef = collection(db, "favorites");

    const postQuery = query(favoritesRef, where("postId", "==", postId));
    const postQuerySnapshot = await getDocs(postQuery);

    const likeCount = postQuerySnapshot.size;

    const liked = postQuerySnapshot.docs.some(
      (doc) => doc.data().userIp === userIp
    );

    return NextResponse.json(
      {
        liked,
        likeCount,
        message: liked
          ? "User has liked this post"
          : "User has not liked this post",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking favorite and like count:", error);
    return NextResponse.json(
      { message: "Error checking favorite and like count" },
      { status: 500 }
    );
  }
}
