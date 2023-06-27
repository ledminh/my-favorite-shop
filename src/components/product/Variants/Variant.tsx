"use client";

import type { Variant as VariantType } from "@/types";

import useVariant from "@/utils/useVariant";

type Props = {
  variant: VariantType;
  productID: string;
  setCurrentVariant: (variant: VariantType) => void;
  setIsVariantModalOpen: (isOpen: boolean) => void;
};

export default function Variant({
  variant,
  productID,
  setCurrentVariant,
  setIsVariantModalOpen,
}: Props) {
  const { getCurrentVariant } = useVariant();

  const currentVariant = getCurrentVariant(productID);

  const onClick = () => {
    setCurrentVariant(variant);
    setIsVariantModalOpen(true);
  };

  return (
    <button
      className={`flex flex-col items-center justify-center p-2${
        currentVariant && currentVariant.id === variant.id ? " bg-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price}</div>
    </button>
  );
}
