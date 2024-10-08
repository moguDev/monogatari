import { useFetchItems } from "@/hooks/useFetchItems";
import { MonoCard } from "./MonoCard";
import { Divider } from "./Divider";
import { useEffect, useState } from "react";
import { Item } from "@/types";
import Link from "next/link";
import { PostForm } from "./PostForm";

export const MonoPickup = () => {
  const { items } = useFetchItems();
  const [item, setItem] = useState<Item | null>(null);

  const setRandomItem = () => {
    const newIndex = Math.floor(Math.random() * items.length);
    if (items[newIndex].id === item?.id) {
      setRandomItem();
    } else {
      setItem(items[newIndex]);
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      setRandomItem();
    }
  }, [items]);

  return (
    <section className="relative md:flex bg-white bg-opacity-50 rounded-md md:p-6 p-2 pt-6">
      <div className="relative flex justify-center">
        <div className="absolute -top-1 -left-0.5 text-2xl bg-orange-400 text-white font-buildingtracks px-3 py-1 z-10 -rotate-1 shadow">
          <p className="-translate-y-1">求む！使い道</p>
        </div>
        <MonoCard item={item} />
      </div>
      <div className="w-full md:px-4 px-2 md:pt-0 pt-4">
        <PostForm itemId={item?.id || ""} />
        <Divider />
        <div className="rounded-md p-2">
          <Link
            href={`/${item?.id}`}
            className="flex items-center justify-center w-full py-3 font-bold transition-all duration-300 active:scale-95 relative"
          >
            <div className="absolute flex items-center justify-end transition-all duration-700 opacity-0 -translate-x-2 hover:opacity-100 hover:translate-x-0 w-full h-full">
              <span className="material-icons">keyboard_arrow_right</span>
            </div>
            <span className="material-icons mr-1" style={{ fontSize: "28px" }}>
              groups
            </span>
            みんなの使い道を見る
          </Link>
          <Divider />
          <button
            className="flex items-center justify-center w-full py-3 font-bold transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={setRandomItem}
          >
            <span
              className="material-icons mr-0.5"
              style={{ fontSize: "24px" }}
            >
              replay
              <div className="w-full" />
            </span>
            <span>ちがうモノで考える</span>
          </button>
        </div>
      </div>
    </section>
  );
};
