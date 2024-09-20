"use client";
import { ButtonMonoGallery } from "@/components/ButtonMonoGallery";
import { Divider } from "@/components/Divider";
import { MonoCard } from "@/components/MonoCard";
import { useFetchPosts } from "@/hooks/useFetchPosts";
import { useState } from "react";

export default function Home() {
  const { posts } = useFetchPosts();
  const [isSend, setIsSend] = useState<boolean>(false);
  return (
    <div>
      {posts.length > 0 && (
        <section className="relative flex bg-white bg-opacity-30 rounded-md p-6">
          <div className="absolute top-2 left-2 text-2xl bg-orange-400 text-white rounded-md font-buildingtracks px-2 z-10 border-2 border-white border-opacity-80">
            <p className="-translate-y-1">ピックアップ</p>
          </div>
          <MonoCard post={posts[0]} />
          <div className="w-full px-4">
            <div className="relative w-max mb-4">
              <div className="absolute bottom-0 translate-x-4 translate-y-2 bg-yellow-500 bg-opacity-60 h-4 w-full -z-10" />
              <h2 className="relative font-buildingtracks flex items-center text-4xl z-10">
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
            <form className="pt-2">
              <input
                id="name"
                type="text"
                className="w-full bg-white  border rounded-md font-thin focus:outline-none placeholder:text-xs p-2 mb-2"
                placeholder="あなたのなまえ（入力がない場合は「名無し」になります）"
              />
              <textarea
                id="body"
                rows={3}
                className="w-full bg-white  border rounded-md font-thin focus:outline-none placeholder:text-xs px-2 py-5 mb-2"
                placeholder="あなたが考えたモノがたり(これからの活用方法)をここに書いてください！"
              />
              <button
                type="button"
                onClick={() => setIsSend(true)}
                disabled={isSend}
                className="relative w-full flex items-center justify-center bg-black font-black rounded text-white py-3 transition-all duration-300 hover:brightness-125 active:scale-95"
              >
                <span className="font-buildingtracks text-3xl -translate-y-[6.8px] mr-0.5">
                  モノがたり
                </span>
                を投稿する
                <span
                  className={`
                  absolute w-full h-full flex items-center ml-1 material-icons my-auto z-10 transition-all duration-700
                  top-[18px] left-0 opacity-0 hover:left-[102px] hover:opacity-100 ${
                    isSend && "translate-x-[1000px]"
                  }
                  `}
                  style={{ fontSize: "20px" }}
                >
                  send
                </span>
              </button>
            </form>
            <Divider />
            <div className="flex">
              <button className="text-sm flex items-center justify-center w-full py-2 bg-white font-bold border-2 border-black rounded transition-all duration-300 hover:scale-105 active:scale-100 mr-1">
                <span
                  className="material-icons mr-1"
                  style={{ fontSize: "28px" }}
                >
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
      )}
      <Divider />
      <div className="flex">
        <ButtonMonoGallery />
      </div>
    </div>
  );
}
