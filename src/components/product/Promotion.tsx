"use client";

import {
  ComponentWithChildren,
  Product as ProductType,
  Variant as VariantType,
} from "@/types";
import useVariant from "@/utils/useVariant";

type Props = {
  product: ProductType;
};

export default function Promotion({ product }: Props) {
  const { getCurrentVariant } = useVariant();

  const currentVariant = getCurrentVariant(product.id);

  let _product: ProductType | VariantType | undefined = product;

  if (product?.variants && currentVariant) {
    _product = product.variants.find(
      (variant) => variant.id === currentVariant.id
    );
  }

  if (!_product || !_product.promotion) {
    return null;
  }

  return <Wrapper>{_product.promotion.description}</Wrapper>;
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
