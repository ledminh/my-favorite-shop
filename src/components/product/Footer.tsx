"use client";

import { Button } from "@/theme/basics";
import { useState } from "react";
import { H3 } from "@/theme/typography";
import QuantityControl from "@/components/QuantityControl";
import {
  ComponentWithChildren,
  Product as ProductType,
  Variant,
} from "@/types";

import { getPrice } from "@/utils/getPrice";

type Props = {
  product: ProductType;
};

export default function Footer({ product }: Props) {
  const [quantity, setQuantity] = useState(0);

  let _product: ProductType | Variant | undefined = product;

  if (product?.variants) {
    _product = product.variants.find((variant) => variant.selected);
  }

  if (!_product) {
    return null;
  }

  const oldUnitPrice = _product.price;
  const newUnitPrice = getPrice(_product);

  return (
    <Wrapper>
      <Price>
        <H3>
          UNIT PRICE:{" "}
          {oldUnitPrice !== newUnitPrice && (
            <>
              <span className="font-normal text-black line-through">
                ${oldUnitPrice.toFixed(2)}
              </span>
              <span> </span>
            </>
          )}
          {oldUnitPrice !== newUnitPrice && (
            <span className="font-bold text-red-700">
              ${newUnitPrice.toFixed(2)}
            </span>
          )}
          {
            // If there is no promotion, show the unit price without promotion
            oldUnitPrice === newUnitPrice && (
              <span className="font-bold text-red-700">
                ${newUnitPrice.toFixed(2)}
              </span>
            )
          }
        </H3>
      </Price>
      <QCWrapper>
        <span>Total: ${(newUnitPrice * quantity).toFixed(2)}</span>
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
    <div className="flex flex-col flex-wrap items-center justify-between p-5 sm:flex-row gap-y-4 gap-x-8 md:justify-between md:flex-nowrap">
      {children}
    </div>
  );
};

const Price: ComponentWithChildren = ({ children }) => {
  return (
    <div className="font-bold text-red-700 md:basis-[40%]">{children}</div>
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
