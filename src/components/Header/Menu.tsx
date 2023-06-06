"use client";

import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import menuItems from "./menuItems";
import ToggleButton from "./ToggleButton";
import MenuScreen from "@/components/MenuScreen";
import MenuBar from "./MenuBar";

import { ComponentWithChildren } from "@/types";
import SearchBar from "@/components/SearchBar";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      <Wrapper screensize="sm">
        <ToggleButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MenuScreen isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
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
        </MenuScreen>
      </Wrapper>
      <Wrapper screensize="md">
        <MenuBar size="sm" />
      </Wrapper>
      <Wrapper screensize="lg">
        <MenuBar size="lg" />
      </Wrapper>
    </>
  );
}

/*********************
 * Styles
 */

type WrapperProps = {
  children: React.ReactNode;
  screensize: "sm" | "md" | "lg";
};

const Wrapper = ({ children, screensize }: WrapperProps) => {
  const getClasses = () => {
    switch (screensize) {
      case "sm":
        return "flex flex-col items-end justify-center w-full h-full sm:hidden";
      case "md":
        return "flex-row items-center justify-end w-full h-full hidden sm:flex lg:hidden";
      case "lg":
        return "flex-row items-center justify-end w-full h-full hidden lg:flex";
    }
  };

  return <div className={getClasses()}>{children}</div>;
};

const SearchBarWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="w-full px-4 py-2">{children}</div>;
};
