import { useState } from "react";

// データの型定義
interface PostData {
  name: string;
  body: string;
  itemId: string;
}

// レスポンスの型定義
interface PostResponse {
  id: string;
  message: string;
}

// カスタムフックを作成
export const usePostPost = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<PostResponse | null>(null);

  const postData = async (data: PostData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/postData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to post data");
      }

      const result: PostResponse = await res.json();
      setResponse(result);
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

  return { postData, response, loading, error };
};
