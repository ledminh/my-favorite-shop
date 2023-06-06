"use client";

import ToggleButton from "./ToggleButton";
import MenuScreen from "@/components/Header/MenuScreen";
import MenuBar from "./MenuBar";

import { useState } from "react";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wrapper screensize="sm">
        <ToggleButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && (
          <MenuScreen isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
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
