import { useFetchItems } from "@/hooks/useFetchItems";
import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";

const GridItem = ({ item }: { item: Item }) => {
  return (
    <Link
      href={`/${item.id}`}
      className="bg-white shadow-md p-3 m-1 cursor-pointer hover:-rotate-3 hover:shadow-lg transition-all duration-300 relative"
    >
      <div className="relative w-full h-44 mx-auto">
        <Image
          src={item.imageUrl}
          alt={item.id}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex items-center justify-between text-sm pt-2">
        <p className="flex items-center text-xs font-sans">
          <span className="material-icons" style={{ fontSize: "16px" }}>
            lightbulb
          </span>
          {item?.postCount}
        </p>
        <p>{item.userName}</p>
      </div>
    </Link>
  );
};

export const MonoGallery = () => {
  const { items, loading } = useFetchItems();
  return (
    <div className="w-full bg-white bg-opacity-50 text-black rounded-md lg:p-4 p-2">
      <div
        className={`
            flex items-center justify-between mb-3 border-b-2 border-black`}
      >
        <div className="flex items-center">
          <span
            className="relative material-icons mr-0.5"
            style={{ fontSize: "44px" }}
          >
            <div className="absolute top-3 left-[15px] bg-white w-3.5 h-3.5" />
            <div className="absolute top-[15.5px] left-[5.5px] bg-white w-[5.4px] h-2" />
            <div className="absolute top-[15.5px] right-[5.5px] bg-white w-[5.4px] h-2" />
            view_carousel
          </span>
          <p className="font-buildingtracks text-3xl -translate-y-1.5">
            モノぎゃらりー
          </p>
        </div>
        <p className="font-buildingtracks lg:text-base text-sm mr-1">
          みんなの捨てられない「モノ」
        </p>
      </div>
      {loading ? (
        <div className="w-full h-64 flex flex-col items-center justify-center opacity-80">
          <span className="loading loading-dots loading-sm" />
          <p className="text-xs">読み込み中...</p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mb-2">
          {items.map((item, index) => (
            <GridItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
