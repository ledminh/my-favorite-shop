"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";
import menuItems from "./menuItems";
import SearchBar from "@/components/SearchBar";

import { ComponentWithChildren } from "@/types";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function MenuScreen({ isMenuOpen, setIsMenuOpen }: Props) {
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };
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

  return (
    <div className="absolute left-0 w-full h-[calc(100%-55px)] top-[55px] bg-gradient-to-b from-blue-950 from-10% to-blue-950/40 flex flex-col items-center justify-center">
      {menuItems.map((page) => (
        <Link
          key={page.name}
          href={page.href}
          className={`mb-4 text-4xl ${
            isCurrentPage(page.href)
              ? "text-red-400 font-bold hover:text-red-400/70"
              : "text-white hover:text-white/70"
          }`}
        >
          {page.name}
        </Link>
      ))}
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
    </div>
  );
}

const SearchBarWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="w-full px-4 py-2">{children}</div>;
};
