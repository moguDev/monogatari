import { useState } from "react";

export const usePostFavorite = (postId: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const addFavorite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error adding favorite:", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, addFavorite };
};
