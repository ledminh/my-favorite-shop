"use client";

import { WithID, Category as CategoryType } from "@/types";
import { useState } from "react";
import List from "./List";
import Screen from "./Screen";

type Props = {
  categories: WithID<CategoryType>[];
  currentCategory: WithID<CategoryType>;
};

export default function Menu({ categories, currentCategory }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <List
        setIsMenuOpen={setIsMenuOpen}
        categories={categories}
        currentCategory={currentCategory}
      />
      <Screen
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        currentCategory={currentCategory}
        categories={categories}
      />
    </>
  );
}
