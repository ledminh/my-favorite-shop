"use client";

import { Button } from "@/theme/basics";
import { useEffect, useState } from "react";
import { H3 } from "@/theme/typography";
import QuantityControl from "@/components/QuantityControl";
import {
  ComponentWithChildren,
  Product as ProductType,
  Variant as VariantType,
  WithID,
  Promotion,
} from "@/types";

import useCart from "@/utils/useCart";

import getPrice from "@/utils/getPrice";

type Props = {
  product?: WithID<ProductType>;
  selectedVariantID?: string;
};

export default function Footer({ product, selectedVariantID }: Props) {
  const [quantity, setQuantity] = useState(0);

  const [oldUnitPrice, setOldUnitPrice] = useState(0);
  const [newUnitPrice, setNewUnitPrice] = useState(0);

  const [selectedVariant, setSelectedVariant] = useState<
    WithID<VariantType> | undefined
  >();

  useEffect(() => {
    setSelectedVariant(
      product?.variants?.find((variant) => variant.id === selectedVariantID)
    );
  }, [selectedVariantID, product]);

  const { addToCart } = useCart();

  if (!product) {
    return null;
  }

  useEffect(() => {
    setOldUnitPrice(
      selectedVariant ? selectedVariant.price : (product.price as number)
    );
    setNewUnitPrice(
      selectedVariant
        ? getPrice(selectedVariant)
        : getPrice(
            product as {
              price: number;
              promotion?: Promotion;
            }
          )
    );
    setQuantity(0);
  }, [selectedVariant]);

  if (!product) {
    return null;
  }

  const addToCartHandle = () => {
    if (quantity === 0) {
      return;
    }

    addToCart({ product, quantity, selectedVariant });

    setQuantity(0);
  };

  return (
    <Wrapper>
      <Price>
        <H3>
          UNIT PRICE:{" "}
          {product.variants && !selectedVariant ? (
            <span className="text-sm text-neutral-700">___</span>
          ) : (
            <>
              {oldUnitPrice !== newUnitPrice && (
                <>
                  <span className="font-normal text-black line-through">
                    ${oldUnitPrice.toLocaleString()}
                  </span>
                  <span> </span>
                </>
              )}
              {oldUnitPrice !== newUnitPrice && (
                <span className="font-bold text-red-700">
                  ${newUnitPrice.toLocaleString()}
                </span>
              )}
              {
                // If there is no promotion, show the unit price without promotion
                oldUnitPrice === newUnitPrice && (
                  <span className="font-bold text-red-700">
                    ${(newUnitPrice || 0).toLocaleString()}
                  </span>
                )
              }
            </>
          )}
        </H3>
      </Price>
      <QCWrapper>
        <span>
          Total: $
          {(
            (newUnitPrice ? newUnitPrice : oldUnitPrice) * quantity || 0
          ).toLocaleString()}
        </span>
        <QuantityControl
          disabled={product.variants && !selectedVariant}
          quantity={quantity}
          setQuantity={setQuantity}
          size="md"
        />
      </QCWrapper>
      <ButtonWrapper>
        <Button
          type="normal"
          size="lg"
          onClick={addToCartHandle}
          disabled={quantity === 0}
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
