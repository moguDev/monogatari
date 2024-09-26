import { usePostItem } from "@/hooks/usePostItem";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  image: FileList | null;
  description: string;
  userName: string;
}

export const NewItemModal = () => {
  const { postItem, loading, progress } = usePostItem();
  const defaultValues: FormData = {
    image: null,
    description: "",
    userName: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ defaultValues });
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageFile = watch("image");
  const [imageSource, setImageSource] = useState("");

  const onsubmit = async (data: FormData) => {
    if (data.image) {
      await postItem(data.image[0], data.description, data.userName);
      (document.getElementById("new_item_modal") as HTMLDialogElement).close();
    }
  };

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImageSource(fileReader.result as string);
    };
    if (imageFile) {
      fileReader.readAsDataURL(imageFile[0]);
    }
  }, [imageFile]);

  return (
    <dialog id="new_item_modal" className="modal z-50">
      <form
        method="dialog"
        className="modal-box w-11/12 max-w-96 bg-opacity-0 shadow-none"
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="relative w-full bg-white rounded-none p-6">
          <button
            type="button"
            className={`
              relative bg-gray-400 bg-opacity-20 w-full h-72 flex flex-col items-center justify-center
              transition-all duration-300 active:scale-95`}
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            {imageSource ? (
              <Image
                src={imageSource}
                alt="image"
                className="object-cover"
                fill
              />
            ) : (
              <>
                <span
                  className="material-icons opacity-30"
                  style={{ fontSize: "44px" }}
                >
                  add_photo_alternate
                </span>
                <p className="font-black opacity-20 text-sm">写真を追加</p>
              </>
            )}
          </button>
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required: "※画像が選択されていません",
            })}
            ref={(e: HTMLInputElement) => {
              register("image").ref(e);
              fileInputRef.current = e;
            }}
            hidden
          />
          <div className="text-red-500 p-0.5 text-xs">
            {errors.image?.message}
          </div>
          <textarea
            placeholder="モノの思い出などを語りましょう"
            className="mt-2 w-full bg-white focus:outline-none p-1 placeholder:opacity-50"
            {...register("description", {
              required: "※思い出や思い入れを入力してください",
              maxLength: {
                value: 64,
                message: "※64文字以内で入力してください",
              },
            })}
          />
          <div className="text-red-500 mb-2 text-xs">
            {errors.description?.message}
          </div>
          <div className="flex items-center justify-end">
            <input
              type="text"
              placeholder="あなたのなまえ"
              className="text-right focus:outline-none bg-white placeholder:opacity-50 p-1"
              {...register("userName", {
                required: "※なまえを入力してください",
                maxLength: {
                  value: 10,
                  message: "※10文字以内で入力してください",
                },
              })}
            />
          </div>
          <div className="text-red-500 p-0.5 text-end text-xs">
            {errors.userName?.message}
          </div>
          <p className="text-xs bg-red-100 text-red-600 p-1.5 rounded-md">
            ※作成した「モノがたり」は削除できません。あらかじめご了承ください。
          </p>
          {loading && (
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
              style={{ backgroundColor: "#fcfcfcee" }}
            >
              <span className="loading loading-spinner loading-lg text-gray-500" />
              <p className="mt-2">{Math.floor(progress * 10) / 10}%</p>
            </div>
          )}
        </div>
        <div className="modal-action mt-2">
          <button
            type="button"
            className="w-1/3 bg-white bg-opacity-90 backdrop-blur rounded-md text-sm transition-all duration-300 active:scale-95"
            onClick={() => {
              (
                document.getElementById("new_item_modal") as HTMLDialogElement
              ).close();
            }}
          >
            キャンセル
          </button>
          <button
            type="submit"
            className={`
              w-2/3 bg-orange-500 text-white px-2 py-3 rounded-md font-bold
              transition-all duration-300 active:scale-95 flex items-center justify-center`}
          >
            <span className="font-buildingtracks text-2xl -translate-y-[5px]">
              モノがたり
            </span>
            を作成
          </button>
        </div>
      </form>
    </dialog>
  );
};
