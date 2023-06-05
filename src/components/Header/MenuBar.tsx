import { SearchIcon } from "@/theme/Icons";
import menuItems from "./menuItems";
import { usePathname } from "next/navigation";
import { ComponentWithChildren } from "@/types";

import Link from "next/link";
import SearchBar from "../SearchBar";
import { CloseIcon } from "@/theme/Icons";

import { useState } from "react";

const sizeClasses = "w-10 h-10";
const colorClasses = "text-white/70 hover:text-white active:text-white/50";
const currentColorClasses =
  "text-red-400/70 font-bold hover:text-red-400 active:text-red-400/50";

type Props = {
  size: "sm" | "lg";
};

export default function MenuBar({ size }: Props) {
  if (size === "sm") {
    return <MenuBarSmall />;
  }

  return <MenuBarLarge />;
}

/***************************
 * Components
 */

function MenuBarLarge() {
  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  return (
    <Wrapper>
      <Buttons>
        {menuItems.map((item) => {
          return (
            <Link
              key={item.name}
              className={`${
                isCurrentPage(item.href) ? currentColorClasses : colorClasses
              } flex flex-col items-center justify-center gap-1`}
              href={item.href}
            >
              <item.icon className={`${sizeClasses}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </Buttons>
      <SearchBar size="lg" />
    </Wrapper>
  );
}

function MenuBarSmall() {
  const [isSearchBarShown, setIsSearchBarShown] = useState(false);

  const pathname = usePathname();

  const isCurrentPage = (href: string) => {
    return pathname === href;
  };

  if (isSearchBarShown) {
    return (
      <Wrapper>
        <SearchBar size="md" />
        <CloseButton hideSearchBar={() => setIsSearchBarShown(false)} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {menuItems.map((item) => {
        return (
          <Link
            key={item.name}
            className={`${sizeClasses} ${
              isCurrentPage(item.href) ? currentColorClasses : colorClasses
            }`}
            href={item.href}
          >
            <item.icon />
          </Link>
        );
      })}
      <SearchButton showSearchBar={() => setIsSearchBarShown(true)} />
    </Wrapper>
  );
}

/*******************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center h-full gap-3 p-3 rounded-md bg-blue-950/60 lg:gap-x-10 lg:px-5">
      {children}
    </div>
  );
};

const Buttons: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-8">
      {children}
    </div>
  );
};

type SearchButtonProps = {
  showSearchBar: () => void;
};

const SearchButton = ({ showSearchBar }: SearchButtonProps) => {
  return (
    <button
      className={sizeClasses + " " + colorClasses}
      onClick={showSearchBar}
    >
      <SearchIcon />
    </button>
  );
};

type CloseButtonProps = {
  hideSearchBar: () => void;
};

const CloseButton = ({ hideSearchBar }: CloseButtonProps) => {
  return (
    <button
      className={sizeClasses + " " + colorClasses}
      onClick={hideSearchBar}
    >
      <CloseIcon />
    </button>
  );
};
