"use client";

import { useState } from "react";
import { Button } from "@/theme/basics";

import CategoryMenuScreen from "./CategoryMenuScreen";

export default function ChangeCategory() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Button
        size="sm"
        color="secondary"
        border="square"
        onClick={() => setIsMenuOpen(true)}
      >
        CHANGE CATEGORY
      </Button>
      <CategoryMenuScreen isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}
