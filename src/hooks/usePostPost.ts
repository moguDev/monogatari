import { Post } from "@/types";
import axios from "axios";
import { useState } from "react";

export const usePostPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const postPost = async (data: Post, fetchPosts?: () => Promise<void>) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post("/api/post", { ...data });
      console.log(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      fetchPosts && (await fetchPosts());
      setLoading(false);
    }
  };

  return { postPost, loading, error };
};
