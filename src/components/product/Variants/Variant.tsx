"use client";

import type { Variant as VariantType, WithID } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  productID: string;
  variant: WithID<VariantType>;
  selectedVariant?: WithID<VariantType>; // saved on local storage
  setSelectedVariant: (
    productID: string,
    variant: WithID<VariantType> | null
  ) => void;
  setIsVariantModalOpen: (isOpen: boolean) => void;
  setCurrentVariant: (variant: WithID<VariantType>) => void;
};

export default function Variant({
  productID,
  variant,
  selectedVariant,
  setSelectedVariant,
  setIsVariantModalOpen,
  setCurrentVariant,
}: Props) {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (selectedVariant) {
      setIsSelected(selectedVariant.id === variant.id);
    } else {
      setIsSelected(false);
    }
  }, [selectedVariant, variant.id]);

  const onClick = () => {
    if (selectedVariant && selectedVariant.id === variant.id) {
      setSelectedVariant(productID, null);
      setIsVariantModalOpen(false);
      return;
    }

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
