"use client";
import { useFetchItems } from "@/hooks/useFetchItems";
import { MonoCard } from "./MonoCard";
import { Divider } from "./Divider";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { isErrored } from "stream";

type FormData = {
  name: string;
  body: string;
};

export const MonoPickup = () => {
  const { items, loading } = useFetchItems();
  const [isSend, setIsSend] = useState<boolean>(false);
  const defaultValues: FormData = {
    name: "",
    body: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onsubmit = (data: FormData) => {
    console.log(data);
    setIsSend(true);
  };

  const headText = (
    <div className="relative w-max mb-4 overflow-hidden">
      <div className="absolute bottom-0 translate-x-2 translate-y-1 bg-yellow-400 bg-opacity-50 h-4 w-full" />
      <h2 className="relative font-buildingtracks flex items-center lg:text-4xl text-[28px] z-10">
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

  return (
    <section className="relative lg:flex bg-white bg-opacity-40 rounded-md lg:p-6 p-2 pt-6">
      {items.length > 0 ? (
        <div className="relative flex justify-center">
          <div className="absolute -top-1 -left-0.5 text-2xl bg-orange-400 text-white font-buildingtracks px-3 py-1 z-10 -rotate-3">
            <p className="-translate-y-1">求む！使い道</p>
          </div>
          <MonoCard item={items[0]} loading={loading} />
        </div>
      ) : (
        <></>
      )}
      <div className="w-full lg:px-4 px-2 lg:pt-0 pt-4">
        <form method="post" onSubmit={handleSubmit(onsubmit)}>
          <div className="bg-white shadow-md p-2 mb-3">
            <div className="mb-2">{headText}</div>
            <input
              id="name"
              type="text"
              className="w-full bg-white  border-b border-black border-opacity-30 font-thin focus:outline-none p-2 mb-2"
              placeholder="あなたのなまえ"
              {...register("name")}
            />
            <textarea
              id="body"
              rows={3}
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
            className="w-full flex items-center justify-center bg-black font-black rounded text-white py-3 transition-all duration-300 hover:brightness-125 active:scale-95 overflow-hidden"
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
        <div className="space-y-1">
          <button className="flex items-center justify-center w-full py-2 bg-white font-bold border-2 border-black rounded transition-all duration-300 hover:brightness-105 active:scale-95">
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
