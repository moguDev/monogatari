import { useFetchPosts } from "@/hooks/useFetchPosts";
import { MonoCard } from "./MonoCard";

export const Posts = () => {
  const { posts } = useFetchPosts();

  return (
    <div>
      {posts.map((post, index) => (
        <MonoCard key={index} post={post} />
      ))}
    </div>
  );
};
