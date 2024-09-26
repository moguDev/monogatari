import { Metadata } from "next";
import { MonoDetails } from "./components/MonoDetails";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } = params;

  return {
    openGraph: {
      title: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
      description:
        "思い出が詰まっていて捨てられないけど、使い道に困っているモノはありませんか？「モノがたり」は、そんなモノの写真と、モノの思い出を語りみんなで新しい活用方法を考えるアプリケーションです。大切なモノに新しい物語を一緒に見つけましょう。",
      url: `https://モノがたり.com/${id}`,
      images: [
        {
          url: `https://モノがたり.com/${id}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${id}`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
      description:
        "思い出が詰まっていて捨てられないけど、使い道に困っているモノはありませんか？「モノがたり」は、そんなモノの写真と、モノの思い出を語りみんなで新しい活用方法を考えるアプリケーションです。大切なモノに新しい物語を一緒に見つけましょう。",
      images: `https://モノがたり.com/${id}/opengraph-image`,
    },
  };
}

export default function DetailPage() {
  return <MonoDetails />;
}
