"use client";
import { useFetchItems } from "@/hooks/useFetchItems";
import { MonoCard } from "./MonoCard";
import { Divider } from "./Divider";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { usePostPost } from "@/hooks/usePostPost";
import { Item } from "@/types";

type FormData = {
  userName: string;
  body: string;
};

export const MonoPickup = () => {
  const { items, loading } = useFetchItems();
  const [item, setItem] = useState<Item | null>(null);
  const [isSend, setIsSend] = useState<boolean>(false);
  const { postPost } = usePostPost();
  const defaultValues: FormData = {
    userName: "",
    body: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onsubmit = (data: FormData) => {
    if (item) {
      setIsSend(true);
      postPost({ ...data, itemId: item?.id });
    }
  };

  const headText = (
    <div className="relative w-max mb-4 overflow-hidden">
      <div className="absolute bottom-0 translate-x-2 translate-y-1 bg-yellow-400 bg-opacity-50 h-4 w-full" />
      <h2 className="relative font-buildingtracks flex items-center md:text-4xl text-[28px] z-10">
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
      {item ? (
        <div className="relative flex justify-center">
          <div className="absolute -top-1 -left-0.5 text-2xl bg-orange-400 text-white font-buildingtracks px-3 py-1 z-10 -rotate-3 shadow">
            <p className="-translate-y-1">求む！使い道</p>
          </div>
          <MonoCard item={item} loading={loading} />
        </div>
      ) : (
        <></>
      )}
      <div className="w-full md:px-4 px-2 md:pt-0 pt-4">
        <form method="post" onSubmit={handleSubmit(onsubmit)}>
          <div className="bg-white shadow-md p-2 mb-3">
            <div className="mb-2">{headText}</div>
            <input
              id="name"
              type="text"
              className="w-full bg-white  border-b border-black border-opacity-30 font-thin focus:outline-none p-2 mb-2"
              placeholder="あなたのなまえ"
              {...register("userName")}
            />
            <textarea
              id="body"
              rows={4}
              className="w-full bg-white font-thin focus:outline-none px-2 py-3"
              placeholder="あなたが考えた使い道をここに書いてください！"
              {...register("body", { required: "※使い道が入力されていません" })}
            />
            <div className="text-red-400 font-black text-xs px-2">
              {errors.body?.message}
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-black font-black rounded text-white py-4 transition-all duration-300 hover:brightness-125 active:scale-95 overflow-hidden"
          >
            {isSend ? "ありがとうございます！" : "使い道を投稿する"}
            <span
              className={`flex items-center ml-1 material-icons my-auto z-10 transition-all duration-1000 ${
                isSend && "translate-x-80 opacity-0 w-0"
              }`}
              style={{ fontSize: "20px" }}
            >
              send
            </span>
          </button>
        </form>
        <Divider />
        <div className="space-y-2">
          <button className="flex items-center justify-center w-full py-3 bg-white font-bold border-2 border-black rounded transition-all duration-300 hover:brightness-105 active:scale-95">
            <span className="material-icons mr-1" style={{ fontSize: "28px" }}>
              groups
            </span>
            みんなの使い道を見る
          </button>
          <button className="flex items-center justify-center w-full py-3 font-bold rounded transition-all duration-300 hover:brightness-105 active:scale-95">
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
