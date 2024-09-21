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
    <div className="bg-white w-max h-max p-4 shadow-md">
      {item.imageUrl !== "null" && (
        <div className="h-72 w-80 relative overflow-hidden">
          <Image
            key={item.id}
            src={item.imageUrl}
            alt="Post Image"
            className="object-cover"
            fill
          />
        </div>
      )}
      <div className="max-w-80 bg-opacity-80 p-5 rounded-b-md">
        <p className="text-sm font-bold">{item.description}</p>
        <div className="flex items-center justify-between pt-6">
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
