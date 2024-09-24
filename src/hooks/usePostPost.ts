import { Post } from "@/types";
import axios from "axios";
import { useState } from "react";

export const usePostPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postPost = async (data: Post) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/postPost", { ...data });
      console.log(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { postPost, loading, error };
};
