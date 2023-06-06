"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";

import { useEffect } from "react";
import type { ComponentWithChildren } from "@/types";
import menuItems from "./Header/menuItems";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  children: React.ReactNode;
};

export default function MenuScreen({
  isMenuOpen,
  setIsMenuOpen,
  children,
}: Props) {
  // close menu when clicking on menu
  useEffect(() => {
    const handleClick = () => {
      if (!isMenuOpen) return;

      setIsMenuOpen(false);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (isMenuOpen) {
    return (
      <div className="absolute left-0 w-full h-[calc(100%-55px)] top-[55px] bg-gradient-to-b from-blue-950 from-10% to-blue-950/40 flex flex-col items-center justify-center">
        {children}
      </div>
    );
  }

  return null;
}
