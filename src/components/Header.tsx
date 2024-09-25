"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={`
        fixed top-0 md:flex items-center h-20 mx-auto
        px-2 lg:pt-5 pb-10 w-full max-w-4xl bg-theme
        text-black select-none border-b-2 border-black z-50
        transition-all duration-700
        ${!isVisible && "-translate-y-28"}`}
      style={{ backgroundColor: "#d7dcd8ee" }}
    >
      <Link
        href="/"
        className="relative md:text-6xl text-4xl w-max font-buildingtracks"
      >
        <h1 className="font-bold">
          モノ<span className="opacity-95">がたり</span>
        </h1>
        <h1 className="font-bold absolute top-0 translate-x-1 translate-y-0.5 opacity-20">
          モノがたり
        </h1>
      </Link>
      <p className="h-full md:p-2 md:text-xl text-md font-buildingtracks">
        捨てられない<span className="md:text-2xl text-xl">「モノ」</span>
        の使い道をみんなで考えるアプリ
      </p>
    </header>
  );
};
