import { Item } from "@/types";
import Image from "next/image";

export const MonoCard = ({
  item,
  loading,
}: {
  item: Item;
  loading: boolean;
}) => {
  return loading ? (
    <></>
  ) : (
    <div className="bg-white w-max h-max p-6 shadow-md">
      {item.imageUrl !== "null" && (
        <div className="h-[340px] w-72 relative overflow-hidden">
          <Image
            key={item.id}
            src={item.imageUrl}
            alt="Post Image"
            className="object-cover"
            fill
          />
        </div>
      )}
      <div className="max-w-72 bg-opacity-80 rounded-b-md">
        <div className="py-4">
          <p className="text-sm font-bold">{item.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="flex items-center text-sm font-sans">
            <span className="material-icons" style={{ fontSize: "16px" }}>
              lightbulb
            </span>
            {0}
          </p>
          <p className="text-xs">{item.userName}</p>
        </div>
      </div>
    </div>
  );
};
