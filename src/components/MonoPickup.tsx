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

  const headText = (
    <div className="relative w-max mb-4 overflow-hidden">
      <div className="absolute bottom-0 translate-x-2 translate-y-1 bg-yellow-400 bg-opacity-50 h-4 w-full" />
      <h2 className="relative font-buildingtracks flex items-center md:text-4xl text-[28px]">
        <span
          className="absolute top-[1px] left-[25px] material-icons"
          style={{ fontSize: "16px" }}
        >
          auto_awesome
        </span>
        <span
          className="material-icons translate-x-[1px] -rotate-12"
          style={{ fontSize: "32px" }}
        >
          lightbulb
        </span>
        あなたの考える使い道は？？？
      </h2>
    </div>
  );

  useEffect(() => {
    if (items.length > 0) {
      setItem(items[Math.floor(Math.random() * items.length)]);
    }
  }, [items]);

  return (
    <section className="relative md:flex bg-white bg-opacity-40 rounded-md md:p-6 p-2 pt-6">
      <div className="relative flex justify-center">
        <div className="absolute -top-1 -left-0.5 text-2xl bg-orange-400 text-white font-buildingtracks px-3 py-1 z-10 -rotate-3 shadow">
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
            className="flex items-center justify-center w-full py-3 font-bold transition-all duration-300 hover:bg-white active:scale-95"
          >
            <span className="material-icons mr-1" style={{ fontSize: "28px" }}>
              groups
            </span>
            みんなの使い道を見る
          </Link>
          <Divider />
          <button className="flex items-center justify-center w-full py-3 font-bold transition-all duration-300 hover:bg-white active:scale-95">
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
