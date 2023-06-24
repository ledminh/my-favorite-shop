"use client";

import { Button } from "@/theme/basics";
import { useState } from "react";
import { H3 } from "@/theme/typography";
import QuantityControl from "@/components/QuantityControl";
import { ComponentWithChildren, Promotion } from "@/types";

type Props = {
  unitPrice?: number;
  promotion?: Promotion;
};

export default function Footer({ unitPrice = 0, promotion }: Props) {
  const [quantity, setQuantity] = useState(0);

  const unitPriceWithPromotion = promotion
    ? promotion.type === "discount"
      ? (unitPrice * (1 - promotion.discountPercent / 100)).toFixed(2)
      : promotion.salePrice.toFixed(2)
    : undefined;

  return (
    <Wrapper>
      <Price>
        <H3>
          UNIT PRICE:{" "}
          {promotion && (
            <>
              <span className="font-normal text-black line-through">
                ${unitPrice.toFixed(2)}
              </span>
              <span> </span>
            </>
          )}
          {unitPriceWithPromotion && (
            <span className="font-bold text-red-700">
              ${unitPriceWithPromotion}
            </span>
          )}
          {
            // If there is no promotion, show the unit price without promotion
            !promotion && (
              <span className="font-bold text-red-700">
                ${unitPrice.toFixed(2)}
              </span>
            )
          }
        </H3>
      </Price>
      <QCWrapper>
        <span>
          (Total: $
          {(
            (unitPriceWithPromotion
              ? Number(unitPriceWithPromotion)
              : unitPrice) * quantity
          ).toFixed(2)}
          )
        </span>
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
    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between p-5 gap-y-4 gap-x-8 md:justify-between md:flex-nowrap">
      {children}
    </div>
  );
};

const Price: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-red-700 md:basis-[40%]">
      {children}
    </div>
  );
};

const QCWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center p-1 border-2 rounded-lg border-blue-950 sm:basis-[40%] min-w-[160px]">
      {children}
    </div>
  );
};

const ButtonWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="basis-full md:basis-[40%]">{children}</div>;
};
