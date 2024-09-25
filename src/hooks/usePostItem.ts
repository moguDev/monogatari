import { useState } from "react";
import { useUploadImage } from "./useUploadImage";
import axios from "axios";

export const usePostItem = () => {
  const { uploadImage, progress } = useUploadImage();
  const [loading, setLoading] = useState<boolean>();

  const postItem = async (
    imageFile: File,
    description: string,
    userName: string
  ) => {
    setLoading(true);
    try {
      const imageUrl = await uploadImage(imageFile);
      const res = await axios.post("/api/item", {
        imageUrl,
        description,
        userName,
      });
      console.log(res);
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };
  return { postItem, loading, progress };
};
