"use client";

import type { Variant as VariantType, WithID } from "@/types";
import { useEffect, useState } from "react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Props = {
  variant: WithID<VariantType>;
  selectedVariantID?: string;
  setIsVariantModalOpen: (isOpen: boolean) => void;
  setCurrentVariant: (variant: WithID<VariantType>) => void;
};

export default function Variant({
  variant,
  selectedVariantID,
  setIsVariantModalOpen,
  setCurrentVariant,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedVariantID === variant.id);
  }, [selectedVariantID, variant.id]);

  const onClick = () => {
    if (selectedVariantID === variant.id) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("var");

      router.push(`${pathname}?${params.toString()}`);
    } else {
      setCurrentVariant(variant);
      setIsVariantModalOpen(true);
    }
  };

  return (
    <button
      className={`flex flex-col items-center justify-center p-2${
        isSelected ? " bg-blue-500" : ""
      }`}
      onClick={onClick}
    >
      <div className="font-semibold">{variant.name}</div>
      <div className="italic">${variant.price.toLocaleString()}</div>
    </button>
  );
}
