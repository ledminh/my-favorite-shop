"use client";

import { Button } from "@/theme/basics";
import QuantityControl from "../../QuantityControl";

import { useState } from "react";

export default function Footer() {
  const [quantity, setQuantity] = useState(0);

  return (
    <Wrapper highLighted={quantity > 0}>
      <QuantityControl quantity={quantity} setQuantity={setQuantity} />
      <Button
        size="md"
        onClick={(e) => {
          e.preventDefault();

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
