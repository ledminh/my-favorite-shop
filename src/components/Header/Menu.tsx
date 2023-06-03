"use client";

import { useState } from "react";

import ToggleButton from "./ToggleButton";
import MenuContent from "./MenuContent";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <ToggleButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuContent isMenuOpen={isMenuOpen} />
    </div>
  );
}
