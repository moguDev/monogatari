import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
  description: `思い出が詰まっていて捨てられないけど、使い道に困っているモノはありませんか？「モノがたり」は、そんなモノの写真と、モノの思い出を語りみんなで新しい活用方法を考えるアプリケーションです。大切なモノに新しい物語を一緒に見つけましょう。`,
  openGraph: {
    title: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
    description: `思い出が詰まっていて捨てられないけど、使い道に困っているモノはありませんか？「モノがたり」は、そんなモノの写真と、モノの思い出を語りみんなで新しい活用方法を考えるアプリケーションです。大切なモノに新しい物語を一緒に見つけましょう。`,
    url: "https://モノがたり.com",
    siteName: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
    images: "./opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "モノがたり | 捨てられない「モノ」の使い道をみんなで考えるアプリ",
    description: `思い出が詰まっていて捨てられないけど、使い道に困っているモノはありませんか？「モノがたり」は、そんなモノの写真と、モノの思い出を語りみんなで新しい活用方法を考えるアプリケーションです。大切なモノに新しい物語を一緒に見つけましょう。`,
    images: "https://モノがたり.com/images/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body
        className={`font-bokutachi max-w-4xl mx-auto bg-theme text-black relative`}
      >
        <Header />
        <main className="lg:mt-24 mt-20 p-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
