import { db } from "@/lib/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { imageUrl, description, userName } = await req.json();
    console.log(imageUrl, description, userName);

    if (!imageUrl || !description || !userName) {
      return NextResponse.json(
        { error: "Missing name or message" },
        { status: 400 }
      );
    }

    const docRef = await addDoc(collection(db, "items"), {
      imageUrl,
      description,
      userName,
      timestamp: new Date(),
    });

    return NextResponse.json(
      { id: docRef.id, message: "Data added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding document", details: error },
      { status: 500 }
    );
  }
};
