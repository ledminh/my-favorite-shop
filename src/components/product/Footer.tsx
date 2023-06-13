"use client";

import { Button } from "@/theme/basics";

import { H3 } from "@/theme/typography";
import QuantityControl from "@/components/QuantityControl";
import { ComponentWithChildren } from "@/types";

export default function Footer() {
  return (
    <Wrapper>
      <Price>
        <H3>PRICE: $150</H3>
      </Price>
      <QCWrapper>
        <QuantityControl quantity={0} setQuantity={() => {}} size="md" />
      </QCWrapper>
      <ButtonWrapper>
        <Button type="normal" size="lg">
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
    <div className="flex flex-row flex-wrap items-center justify-center p-5 gap-y-4 gap-x-8 md:justify-between">
      {children}
    </div>
  );
};

const Price: ComponentWithChildren = ({ children }) => {
  return <div className="font-bold text-red-700">{children}</div>;
};

const QCWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="p-1 border-2 rounded-lg border-blue-950">{children}</div>
  );
};

const ButtonWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-full md:basis-1/2">{children}</div>;
};
