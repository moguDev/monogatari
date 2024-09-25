import { useEffect, useState } from "react";

export const useFavorites = (postId: string) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const check = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/favorites/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      const data = await response.json();
      setLiked(data.liked);
      setLikeCount(data.likeCount);
    } catch (error) {
      console.error("Error checking favorite:", error);
    } finally {
      setLoading(false);
    }
  };

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
      await check();
      setLoading(false);
    }
  };

  const removeFavorite = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/favorites", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error removing favorite:", error);
    } finally {
      await check();
      setLoading(false);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return { liked, likeCount, loading, check, addFavorite, removeFavorite };
};
