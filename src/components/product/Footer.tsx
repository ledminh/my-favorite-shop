"use client";

import { Button } from "@/theme/basics";
import { useState } from "react";
import { H3 } from "@/theme/typography";
import QuantityControl from "@/components/QuantityControl";
import { ComponentWithChildren } from "@/types";

type Props = {
  unitPrice?: number;
};

export default function Footer({ unitPrice = 0 }: Props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <Wrapper>
      <Price>
        <H3>PRICE: ${(unitPrice * quantity).toFixed(2)}</H3>
      </Price>
      <QCWrapper>
        <QuantityControl
          quantity={quantity}
          setQuantity={setQuantity}
          size="md"
        />
      </QCWrapper>
      <ButtonWrapper>
        <Button
          type="normal"
          size="lg"
          onClick={() => {
            setQuantity(0);
          }}
        >
          Add to Cart
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

/************************
 *  Styles
 */

const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center p-5 gap-y-4 gap-x-8 md:justify-between md:flex-nowrap">
      {children}
    </div>
  );
};

const Price: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-red-700 md:basis-[30%]">{children}</div>
  );
};

const QCWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="p-1 border-2 rounded-lg border-blue-950 md:basis-[22%]">
      {children}
    </div>
  );
};

const ButtonWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-full md:basis-[40%]">{children}</div>;
};
