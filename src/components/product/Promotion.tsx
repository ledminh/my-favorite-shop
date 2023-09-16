"use client";

import {
  ComponentWithChildren,
  Product as ProductType,
  Variant as VariantType,
  Promotion,
  WithID,
} from "@/types";

import { useEffect, useState } from "react";

type Props = {
  product: WithID<ProductType>;
  selectedVariantID?: string;
};

export default function Promotion({ product, selectedVariantID }: Props) {
  const [promotion, setPromotion] = useState<Promotion | undefined>();
  const [selectedVariant, setSelectedVariant] = useState<
    WithID<VariantType> | undefined
  >();

  useEffect(() => {
    setSelectedVariant(
      product.variants?.find((variant) => variant.id === selectedVariantID)
    );
  }, [selectedVariantID, product]);

  useEffect(() => {
    setPromotion(
      selectedVariant ? selectedVariant.promotion : product.promotion
    );
  }, [selectedVariant]);

  if (promotion) {
    return <Wrapper>{promotion.description}</Wrapper>;
  }

  return null;
}

/***************
 * Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-2 text-lg font-semibold text-center text-red-500 bg-red-100 border-2 border-red-300 rounded-md">
      {children}
    </div>
  );
};
