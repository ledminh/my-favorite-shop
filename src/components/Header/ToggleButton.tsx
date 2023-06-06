import { HamburgerIcon, CloseIcon } from "@/theme/Icons";
import { useEffect } from "react";
type ToggleButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
};

export default function ToggleButton({
  isMenuOpen,
  setIsMenuOpen,
}: ToggleButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();

        setIsMenuOpen(!isMenuOpen);
      }}
      className="text-white hover:text-white/75 active:text-white/60"
    >
      {isMenuOpen ? (
        <CloseIcon className="w-[50px] h-[50px]" />
      ) : (
        <HamburgerIcon className="w-[50px] h-[50px]" />
      )}
    </button>
  );
}
