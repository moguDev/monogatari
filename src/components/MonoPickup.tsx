"use client";
import { useFetchItems } from "@/hooks/useFetchItems";
import { MonoCard } from "./MonoCard";
import { Divider } from "./Divider";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  body: string;
};

export const MonoPickup = () => {
  const { items, loading } = useFetchItems();
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
    console.log("submit");
  };

  const headText = (
    <div className="relative w-max  mb-4">
      <div className="absolute bottom-0 translate-x-2 translate-y-1 bg-yellow-500 bg-opacity-60 h-4 w-full -z-10" />
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
        あなたの考えるモノがたりは？？？
      </h2>
    </div>
  );

  return (
    <section className="relative lg:flex bg-white bg-opacity-40 rounded-md lg:p-6 p-2">
      <div className="lg:hidden">{headText}</div>
      {items.length > 0 ? (
        <div className="relative flex justify-center">
          <div className="absolute -top-1 -left-0.5 text-2xl bg-orange-400 text-white font-buildingtracks px-2 z-10 -rotate-3">
            <p className="-translate-y-1">求む！使い道</p>
          </div>
          <MonoCard item={items[0]} loading={loading} />
        </div>
      ) : (
        <></>
      )}
      <div className="w-full lg:px-4 lg:pt-0 pt-4">
        <div className="lg:block hidden">{headText}</div>
        <form className="pt-2" method="post" onSubmit={handleSubmit(onsubmit)}>
          <input
            id="name"
            type="text"
            className="w-full bg-white  border rounded-md font-thin focus:outline-none p-2 mb-2"
            placeholder="なまえ（入力がない場合は「名無し」になります）"
            {...register("name")}
          />
          <textarea
            id="body"
            rows={3}
            className="w-full bg-white  border rounded-md font-thin focus:outline-none px-2 py-3 mb-2"
            placeholder="あなたが考えたモノがたり(これからの活用方法)をここに書いてください！"
            {...register("body", { required: "使い道が入力されていません" })}
          />
          <div className="text-red-500 text-xs my-2">
            {errors.body?.message}
          </div>
          <button
            type="submit"
            className="relative w-full flex items-center justify-center bg-black font-black rounded text-white py-3 transition-all duration-300 hover:brightness-125 active:scale-95 overflow-hidden"
          >
            使い道を投稿する
            <span
              className={`
                  absolute w-full h-full flex items-center ml-1 material-icons my-auto z-10 transition-all duration-700
                  top-3.5 left-0 opacity-0 hover:left-[75px] hover:opacity-100`}
              style={{ fontSize: "20px" }}
            >
              send
            </span>
          </button>
        </form>
        <Divider />
        <div className="flex">
          <button className="text-sm flex items-center justify-center w-full py-2 bg-white font-bold border-2 border-black rounded transition-all duration-300 hover:scale-105 active:scale-100 mr-1">
            <span className="material-icons mr-1" style={{ fontSize: "28px" }}>
              groups
            </span>
            みんなの投稿を見る
          </button>
          <button className="text-sm flex items-center justify-center w-full py-2 border-opacity-80 font-bold border-2 border-black rounded transition-all duration-300 hover:scale-105 active:scale-100 ml-1">
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
