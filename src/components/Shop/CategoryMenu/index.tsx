"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/theme/basics";
import CategoryMenuScreen from "./CategoryMenuScreen";
import Category from "../Category";
import type { Category as CategoryType } from "@/types";

type Props = {
  skeleton?: boolean;
  categories?: CategoryType[];
};

export default function CategoryMenu({ skeleton = false, categories }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (skeleton) {
    return (
      <>
        <Wrapper type="sm">
          <Button size="sm" color="secondary" border="square">
            CHANGE CATEGORY
          </Button>
        </Wrapper>
        <Wrapper type="md">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Category key={index} type="Block" skeleton={true} />
            ))}
          <MoreButton setIsMenuOpen={setIsMenuOpen} />
        </Wrapper>
        <Wrapper type="lg">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <Category key={index} type="Block" skeleton={true} />
            ))}
          <MoreButton setIsMenuOpen={setIsMenuOpen} />
        </Wrapper>
      </>
    );
  }

  if (!categories) {
    throw new Error("Categories not found");
  }

  const [filteredCategories5, setFilteredCategories5] = useState(
    filterCategories(categories, categories[0], 5)
  );

  const [filteredCategories10, setFilteredCategories10] = useState(
    filterCategories(categories, categories[0], 10)
  );

  const currentCategory = getCurrentCategory(categories);

  useEffect(() => {
    if (!filteredCategories5.includes(currentCategory)) {
      setFilteredCategories5(filterCategories(categories, currentCategory, 5));
    }

    if (!filteredCategories10.includes(currentCategory)) {
      setFilteredCategories10(
        filterCategories(categories, currentCategory, 10)
      );
    }
  }, [currentCategory]);

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
        {filteredCategories5.map((category) => (
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
        {filteredCategories10.map((category) => (
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

/************************************************
 * Utils
 ************************************************/

function filterCategories(
  categories: CategoryType[],
  currentCategory: CategoryType,
  numCats: number // 7
) {
  const index = categories.findIndex(
    (category) => category.id === currentCategory.id
  ); // 2

  let start = index - Math.floor(numCats / 2); // 2 - 3 = -1
  let end = index + Math.floor(numCats / 2); // 2 + 3 = 5

  if (start < 0) {
    end = end - start;
    start = 0;
  }

  if (end > categories.length - 1) {
    start = start - (end - (categories.length - 1));
    end = categories.length - 1;
  }

  if (numCats % 2 === 1) {
    end = end + 1;
  }

  const filteredCategories = categories.slice(start, end);

  return filteredCategories;
}

/***********************
 * getCurrentCategory
 */

const getCurrentCategory = (categories: CategoryType[]) => {
  const pathname = usePathname();

  const currentCategory = categories.find(
    (category) => category.link === pathname
  );

  if (!currentCategory) throw new Error("Category not found");

  return currentCategory;
};
