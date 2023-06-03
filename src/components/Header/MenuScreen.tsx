"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar";

import type { ComponentWithChildren } from "@/types";
import menuItems from "./menuItems";

type Props = {
  isMenuOpen: boolean;
};

export default function MenuScreen({ isMenuOpen }: Props) {
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  if (isMenuOpen) {
    return (
      <div className="absolute left-0 w-full h-full top-[55px] bg-gradient-to-b from-blue-950 from-10% to-blue-950/40">
        <div className="container flex flex-col items-center justify-center h-full">
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
      </div>
    );
  }

  return null;
}

/*******************
 * Styles
 */

const SearchBarWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="w-full px-4 py-2">{children}</div>;
};
