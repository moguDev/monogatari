import { Item } from "@/types";
import Image from "next/image";
import PinImage from "/public/images/pin.png";

export const MonoCard = ({ item }: { item: Item | null }) => {
  return (
    <div className="bg-white w-max h-max p-6 shadow-md -rotate-2 relative">
      <div className="absolute -top-3 left-36 w-10 h-10 z-20">
        <Image src={PinImage} alt="pin_image" className="object-cover" fill />
      </div>
      {item ? (
        <div className="h-72 w-72 relative overflow-hidden">
          <Image
            key={item.id}
            src={item.imageUrl}
            alt="Post Image"
            className="object-cover"
            fill
          />
        </div>
      ) : (
        <div className="h-72 w-72 bg-gray-200 rounded-none flex flex-col items-center justify-center opacity-50">
          <span className="loading loading-dots loading-md text-black" />
          <p className="text-xs">読み込み中...</p>
        </div>
      )}
      <div className="max-w-72 bg-opacity-80 rounded-b-md">
        <div className="py-4 min-h-28">
          {item ? (
            <p className="text-sm font-bold">{item.description}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="flex items-center text-sm font-sans">
            <span className="material-icons" style={{ fontSize: "16px" }}>
              lightbulb
            </span>
            {item?.postCount}
          </p>
          {item ? <p className="text-xs">{item.userName}</p> : <></>}
        </div>
      </div>
    </div>
  );
};
