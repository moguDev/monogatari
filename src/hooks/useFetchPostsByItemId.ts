import { db } from "@/lib/firebase/firebase";
import { Post } from "@/types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchPostsByItemId = (itemId: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "posts"), where("itemId", "==", itemId));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs) {
        const postsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(postsData);
        setPosts(postsData as Post[]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { posts, loading, fetch };
};
