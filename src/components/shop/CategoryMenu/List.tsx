"use client";

import { useEffect, useState } from "react";

import type { Category as CategoryType, WithID } from "@/types";

import { filterCategories } from "./utils";

import Wrapper from "./Wrapper";
import { Button } from "@/theme/basics";
import MoreButton from "./MoreButton";
import Category from "@/components/shop/Category";

type Props = {
  setIsMenuOpen: (arg: boolean) => void;
  categories: WithID<CategoryType>[];
  currentCategory: WithID<CategoryType>;
};

export default function Menu({
  setIsMenuOpen,
  categories,
  currentCategory,
}: Props) {
  const [filteredCategories5, setFilteredCategories5] = useState(
    categories ? filterCategories(categories, categories[0], 5) : []
  );

  const [filteredCategories10, setFilteredCategories10] = useState(
    categories ? filterCategories(categories, categories[0], 10) : []
  );

  useEffect(() => {
    if (!currentCategory || !categories) return;

    if (!filteredCategories5.includes(currentCategory)) {
      setFilteredCategories5(filterCategories(categories, currentCategory, 5));
    }

    if (!filteredCategories10.includes(currentCategory)) {
      setFilteredCategories10(
        filterCategories(categories, currentCategory, 10)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {categories.length > 5 && <MoreButton setIsMenuOpen={setIsMenuOpen} />}
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
        {categories.length > 10 && <MoreButton setIsMenuOpen={setIsMenuOpen} />}
      </Wrapper>
    </>
  );
}
