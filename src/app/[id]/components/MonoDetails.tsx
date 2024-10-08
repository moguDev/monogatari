"use client";
import { MonoCard } from "@/components/MonoCard";
import { PostForm } from "@/components/PostForm";
import { useFetchByid } from "@/hooks/useFetchById";
import { useFetchPostsByItemId } from "@/hooks/useFetchPostsByItemId";
import { useFavorites } from "@/hooks/useFavorites";
import { Post } from "@/types";
import { useParams } from "next/navigation";
import { Timestamp } from "firebase/firestore";
import XIcon from "@mui/icons-material/X";

const convertTimestampToDate = (timestamp: Timestamp): Date => {
  const seconds = timestamp.seconds;
  const nanoseconds = timestamp.nanoseconds;

  const date = new Date(seconds * 1000 + nanoseconds / 1e6);

  const jstDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

  return jstDate;
};

const UserPost = ({ post }: { post: Post }) => {
  const { liked, likeCount, addFavorite, removeFavorite, loading } =
    useFavorites(post.id!);
  return (
    <div className="bg-white rounded p-3 my-2 flex relative">
      <div className="mr-4 w-full">
        <p className="text-lg pb-3">{post.body}</p>
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs select-none">
            {convertTimestampToDate(post.timestamp!)
              .toISOString()
              .slice(0, 19)
              .replace("T", " ")}
          </p>
          <p className="text-end text-xs">{post.userName}</p>
        </div>
      </div>
      <div className="relative">
        <button
          className="bg-gray-400 bg-opacity-10 w-16 rounded-xl p-2"
          onClick={() => {
            if (liked) {
              removeFavorite();
            } else {
              addFavorite();
            }
          }}
        >
          <span className="material-icons m-0">
            {liked ? "thumb_up_alt" : "thumb_up_off_alt"}
          </span>
          <p className="text-sm m-0" style={{ lineHeight: "10px" }}>
            {likeCount}
          </p>
        </button>
        {loading && (
          <div className="absolute top-0 left-0 bg-white bg-opacity-80 flex items-center justify-center h-full w-full">
            <span className="loading loading-spinner loading-xs" />
          </div>
        )}
      </div>
    </div>
  );
};

export const MonoDetails = () => {
  const { id } = useParams();
  const { item } = useFetchByid(id as string);
  const { posts, loading, fetch } = useFetchPostsByItemId(id as string);

  const currentUrl = `https://モノがたり.com/${id}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `「モノがたり」でみんなの捨てられない「モノ」の使い道を考えよう！ \n #RUNTEQ #ミニアプリWeek \n`
  )}&url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="lg:flex">
      <div className="flex flex-col items-center justify-start p-2 space-y-2">
        <MonoCard item={item} />
        <div className="pt-5 px-6 w-full">
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white w-full p-3 rounded-md flex items-center justify-center transition-all duration-300 active:scale-95"
            style={{ backgroundColor: "#222" }}
          >
            <XIcon style={{ fontSize: "20px", color: "fcfcf5" }} />
            <span className="ml-1">で使い道を募集する！</span>
          </a>
        </div>
      </div>
      <div className="px-4 py-2 space-y-4 w-full">
        <PostForm itemId={id as string} fetchPost={fetch} />
        <section className="bg-white bg-opacity-60 rounded-md my-4 p-4">
          <div className="relative w-max">
            <div className="absolute bottom-0 translate-x-2 lg:translate-y-0 -translate-y-1.5 bg-yellow-400 bg-opacity-60 h-4 w-full" />
            <h2 className="font-buildingtracks -translate-y-1.5 lg:text-4xl text-[28px] select-none">
              <span
                className="absolute top-4 left-9 material-icons"
                style={{ fontSize: "12px" }}
              >
                auto_awesome
              </span>
              <span
                className="material-icons translate-y-3 -rotate-3 mr-1"
                style={{ fontSize: "44px" }}
              >
                groups
              </span>
              みんなの考えた使い道！！！
            </h2>
          </div>
          {loading ? (
            <div className="w-full h-64 flex items-center justify-center">
              <span className="loading loading-spinner loading-md" />
            </div>
          ) : posts.length === 0 ? (
            <div className="w-full h-64 flex items-center justify-center">
              <p className="text-opacity-60">まだ使い道がないようです...</p>
            </div>
          ) : (
            posts
              .sort((a, b) => b.timestamp!.seconds - a.timestamp!.seconds)
              .map((post, index) => <UserPost key={index} post={post} />)
          )}
        </section>
      </div>
    </div>
  );
};
