import { usePostPost } from "@/hooks/usePostPost";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  userName: string;
  body: string;
};

export const PostForm = ({
  itemId,
  fetchPost,
}: {
  itemId: string;
  fetchPost?: () => Promise<void>;
}) => {
  const { postPost, loading } = usePostPost();
  const [isSend, setIsSend] = useState<boolean>(false);
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
    setIsSend(true);
    postPost(
      {
        ...data,
        itemId: itemId,
        userName:
          data.userName === "" ? "（名前が無いようです）" : data.userName,
      },
      fetchPost
    );
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onsubmit)}
      className="bg-white p-2 mb-2 rounded-md relative"
    >
      <section className="relative">
        <div className="mb-2 z-10">
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
        </div>
        <input
          id="name"
          type="text"
          className="w-full bg-white border-b border-black border-opacity-30 font-thin focus:outline-none p-2 mb-2"
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
        {isSend && (
          <div className="absolute top-0 left-0 bg-white bg-opacity-50 w-full h-full" />
        )}
      </section>
      <button
        type="submit"
        disabled={isSend}
        className={`
              w-full flex items-center justify-center bg-black font-black rounded
              text-white py-4 transition-all duration-300 overflow-hidden
              ${
                isSend ? "opacity-70" : "hover:brightness-125 active:scale-95"
              }`}
      >
        {isSend
          ? loading
            ? "送信しています..."
            : "投稿しました！"
          : "使い道を投稿する"}
        <span
          className={`flex items-center ml-1 material-icons my-auto z-10 transition-all duration-1000 ${
            isSend && "translate-x-80 opacity-0 w-0"
          }`}
          style={{ fontSize: "20px" }}
        >
          send
        </span>
      </button>
      {itemId === "" && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col opacity-80 items-center justify-center">
          <span className="loading loading-dots loading-md text-black" />
          <p className="text-xs">読み込み中...</p>
        </div>
      )}
    </form>
  );
};
