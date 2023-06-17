"use client";

import { useState } from "react";
import { Button } from "@/theme/basics";
import CategoryMenuScreen from "./CategoryMenuScreen";
import categories from "@/data/categories";
import Category from "../Category";
import type { Category as CategoryType } from "@/types";

type Props = {
  currentCategory: CategoryType;
};

export default function CategoryMenu({ currentCategory }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wrapper type="sm">
        <Button
          size="sm"
          color="secondary"
          border="square"
          onClick={() => setIsMenuOpen(true)}
        >
          CHANGE CATEGORY
        </Button>
      </Wrapper>
      <Wrapper type="md">
        {filterCategories(categories, currentCategory, 5).map((category) => (
          <Category
            key={category.name}
            category={category}
            type="Block"
            isCurrent={category.id === currentCategory.id}
          />
        ))}
        <MoreButton setIsMenuOpen={setIsMenuOpen} />
      </Wrapper>
      <Wrapper type="lg">
        {filterCategories(categories, currentCategory, 10).map((category) => (
          <Category
            key={category.id}
            category={category}
            type="Block"
            isCurrent={category.id === currentCategory.id}
          />
        ))}
        <MoreButton setIsMenuOpen={setIsMenuOpen} />
      </Wrapper>
      <CategoryMenuScreen
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        currentCategory={currentCategory}
      />
    </>
  );
}

/*********************
 * Styles
 */
type WrapperProps = {
  type: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const WrapperStyle = {
  sm: "sm:hidden w-1/2 mx-auto",
  // md: "hidden sm:grid sm:grid-cols-7 sm:gap-3 text-xs w-11/12 mx-auto lg:hidden",
  md: "hidden sm:flex sm:justify-center sm:gap-3 text-xs w-11/12 mx-auto lg:hidden",
  lg: "hidden lg:grid lg:grid-cols-11 lg:gap-3 text-xs w-11/12 mx-auto",
};

const Wrapper = ({ children, type }: WrapperProps) => {
  return <div className={WrapperStyle[type]}>{children}</div>;
};

type MoreButtonProps = {
  setIsMenuOpen: (value: boolean) => void;
};

const MoreButton = ({ setIsMenuOpen }: MoreButtonProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center w-20 gap-1 p-1 text-center border rounded-md border-blue-950 hover:bg-black/20"
      onClick={() => setIsMenuOpen(true)}
    >
      <span>... MORE</span>
    </button>
  );
};

/*****************************
 * Utils
 */
function filterCategories(
  categories: CategoryType[],
  currentCategory: CategoryType,
  numCats: number // 6
) {
  const index = categories.findIndex(
    (category) => category.id === currentCategory.id
  );

  let start = index - Math.floor(numCats / 2);
  let end = index + Math.floor(numCats / 2);

  if (start < 0) {
    end = end - start;
    start = 0;
  }

  if (end > categories.length - 1) {
    start = start - (end - (categories.length - 1));
    end = categories.length - 1;
  }

  const filteredCategories = categories.slice(start, end);

  return filteredCategories;
}