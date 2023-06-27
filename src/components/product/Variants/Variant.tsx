"use client";

import type { Variant as VariantType } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  variant: VariantType;
  setIsVariantModalOpen: (isOpen: boolean) => void;
  selectedVariant?: VariantType; // saved on local storage
  setCurrentVariant: (variant: VariantType) => void;
};

export default function Variant({
  variant,
  selectedVariant,
  setIsVariantModalOpen,
  setCurrentVariant,
}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedVariant) {
      setIsSelected(selectedVariant.id === variant.id);
    }
  }, [selectedVariant, variant.id]);

  const onClick = () => {
    setCurrentVariant(variant);
    setIsVariantModalOpen(true);
  };

  return (
    <button
      className={`flex flex-col items-center justify-center p-2${
        isSelected ? " bg-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price}</div>
    </button>
  );
}
