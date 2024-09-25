import { db } from "@/lib/firebase/firebase";
import { Item } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useFetchByid = (id: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState<Item | null>(null);

  const fetch = async () => {
    setLoading(true);
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const itemData: Item = { id: id, ...docSnap.data() } as Item;
      setItem(itemData);
    } else {
      console.log("データが見つかりませんでした。");
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { item, loading };
};
