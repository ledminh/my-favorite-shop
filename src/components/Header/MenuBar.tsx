import { SearchIcon } from "@/theme/Icons";
import menuItems from "./menuItems";
import { usePathname } from "next/navigation";
import { ComponentWithChildren } from "@/types";

import Link from "next/link";
import SearchBar from "../SearchBar";
import { CloseIcon } from "@/theme/Icons";

import { useState } from "react";

const sizeClasses = "w-10 h-10";
const colorClasses = "text-white hover:text-white/50 active:text-white/30";
const currentColorClasses = "text-red-400 font-bold hover:text-red-400/50";

export default function MenuBar() {
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
    <div className="flex flex-row items-center justify-center h-full gap-3 p-3 rounded-md bg-blue-950/60">
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
