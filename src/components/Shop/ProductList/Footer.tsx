"use client";

import { Button } from "@/theme/basics";
import QuantityControl from "../../QuantityControl";

import useCart from "@/utils/useCart";
import { Product as ProductType } from "@/types";

import { useState } from "react";

type Props = {
  product: ProductType;
};

export default function Footer({ product }: Props) {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useCart();

  return (
    <Wrapper highLighted={quantity > 0}>
      <QuantityControl quantity={quantity} setQuantity={setQuantity} />
      <Button
        disabled={quantity === 0}
        size="md"
        onClick={(e) => {
          e.preventDefault();
          addToCart({
            ...product,
            quantity,
          });
          setQuantity(0);
        }}
      >
        Add to cart
      </Button>
    </Wrapper>
  );
}

/****************
 * Styles
 */

type WrapperProps = {
  children: React.ReactNode;
  highLighted: boolean;
};

const Wrapper = ({ children, highLighted }: WrapperProps) => {
  return (
    <div
      className={`flex flex-row items-center justify-center gap-4 p-2 md:flex-col ${
        highLighted ? "bg-red-800/70" : "bg-blue-950/90"
      }`}
    >
      {children}
    </div>
  );
};
