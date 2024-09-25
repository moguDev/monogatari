import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/firebase";
import { Item, Post } from "@/types";

export const useFetchItems = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const itemsCollection = collection(db, "items");
      const itemsSnapshot = await getDocs(itemsCollection);
      const itemsData = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Item[];

      const postsCollection = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollection);
      const postsData = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];

      const itemsWithPostCount = itemsData.map((item) => {
        const postCount = postsData.filter(
          (post) => post.itemId === item.id
        ).length;
        return { ...item, postCount: postCount }; // postCountを追加
      });

      setItems(itemsWithPostCount);
    } catch (error) {
      console.error("Error fetching items or posts: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { items, loading };
};
