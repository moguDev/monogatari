import { storage } from "@/lib/firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export const useUploadImage = () => {
  const [progress, setProgress] = useState<number>(0);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const uploadImage = (imageFile: File) => {
    return new Promise<string>((resolve, reject) => {
      if (!imageFile) return reject("No file selected");

      const uniqueFileName = `${Date.now()}_${imageFile.name}`;
      const storageRef = ref(storage, uniqueFileName);
      const metadata = {
        cacheControl: "public, max-age=31536000",
        contentType: imageFile.type,
      };

      const uploadTask = uploadBytesResumable(storageRef, imageFile, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImageURL(url);
            resolve(url);
          });
        }
      );
    });
  };

  return { progress, imageURL, uploadImage };
};
