import { useFetchItems } from "@/hooks/useFetchItems";
import { MonoCard } from "./MonoCard";

export const Posts = () => {
  const { items, loading } = useFetchItems();

  return (
    <div>
      {items.map((item, index) => (
        <MonoCard key={index} item={item} loading={loading} />
      ))}
    </div>
  );
};
