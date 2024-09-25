import { useFetchItems } from "@/hooks/useFetchItems";
import { Item } from "@/types";
import Image from "next/image";
import Link from "next/link";

const GridItem = ({ item }: { item: Item }) => {
  return (
    <Link
      href={`/${item.id}`}
      className="bg-white shadow-md p-3 m-1 cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative"
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
        <p></p>
        <p>{item.userName}</p>
      </div>
    </Link>
  );
};

export const MonoGallery = () => {
  const { items } = useFetchItems();
  return (
    <div className="w-full bg-white bg-opacity-30 text-black rounded-md lg:p-4 p-2">
      <div
        className={`
            flex items-center mb-3 border-b-2 border-black`}
      >
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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mb-2">
        {items.map((item, index) => (
          <GridItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
