"use client";

import {
  ComponentWithChildren,
  Product as ProductType,
  Promotion,
} from "@/types";
import useVariant from "@/utils/useVariant";

import { useEffect, useState } from "react";

type Props = {
  product: ProductType;
};

export default function Promotion({ product }: Props) {
  const { getSelectedVariant } = useVariant();

  const selectedVariant = getSelectedVariant(product.id);

  const [promotion, setPromotion] = useState<Promotion | undefined>();

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
