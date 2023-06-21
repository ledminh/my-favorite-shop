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
    window.addEventListener("resize", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
      window.addEventListener("resize", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
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
        <SearchBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </SearchBarWrapper>
    </Wrapper>
  );
}

/****************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute left-0 w-full h-[calc(100%-65px)] top-[65px] bg-gradient-to-b from-blue-950 from-10% to-blue-950/40 flex flex-col items-center justify-center z-50">
      {children}
    </div>
  );
};

const SearchBarWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="w-full px-4 py-2">{children}</div>;
};
