import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/firebase";
import { Item } from "@/types";

export const useFetchItems = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const fetch = async () => {
    setLoading(true);
    try {
      const itemsCollection = collection(db, "items");
      const itemssSnapshot = await getDocs(itemsCollection);
      const itemssData = itemssSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Item[];
      setItems(itemssData);
    } catch (error) {
      console.error("Error fetching itemss: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { items, loading };
};
