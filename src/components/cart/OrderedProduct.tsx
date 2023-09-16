"use client";

import { useEffect, useState } from "react";
import useCart from "@/utils/useCart";
import {
  OrderedProduct as OrderedProductType,
  ComponentWithChildren,
  WithID,
} from "@/types";

import Image from "next/image";
import QuantityControl from "@/components/QuantityControl";
import getPrice from "@/utils/getPrice";

type Props = {
  orderedProduct: WithID<OrderedProductType>;
};

export default function OrderedProduct({ orderedProduct }: Props) {
  const [quantity, setQuantity] = useState(orderedProduct.quantity);

  const { removeFromCart, updateCart } = useCart();

  const mainImage = getMainImage(orderedProduct);
  const unitPrice = getPrice(
    orderedProduct.selectedVariant
      ? orderedProduct.selectedVariant
      : orderedProduct
  );

  const productName = orderedProduct.selectedVariant
    ? orderedProduct.name + " - " + orderedProduct.selectedVariant.name
    : orderedProduct.name;

  useEffect(() => {
    orderedProduct.quantity = quantity;
    updateCart(orderedProduct);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  // This is to fix the bug when user add more of the same product to cart but the quantity doesn't update
  useEffect(() => {
    if (orderedProduct.quantity !== quantity)
      setQuantity(orderedProduct.quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedProduct]);

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </ImageWrapper>
      <Content>
        <Name>{productName}</Name>
        <Price>Unit Price: ${unitPrice.toLocaleString()}</Price>
        <TotalPrice>
          Total: ${(unitPrice * quantity).toLocaleString()}
        </TotalPrice>
      </Content>
      <Footer>
        <QCWrapper>
          <QuantityControl
            quantity={quantity}
            setQuantity={setQuantity}
            min={1}
          />
        </QCWrapper>
        <Button onClick={() => removeFromCart(orderedProduct)}>REMOVE</Button>
      </Footer>
    </Wrapper>
  );
}

/**********************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="flex items-center justify-between gap-4 p-2 rounded-lg shadow-lg ring-1 ring-slate-500">
    {children}
  </div>
);

const ImageWrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative min-w-[80px] h-[80px] rounded-2xl overflow-hidden">
    {children}
  </div>
);

const Content: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-col justify-between basis-full">{children}</div>
);

const Name: ComponentWithChildren = ({ children }) => (
  <div className="font-bold">{children}</div>
);

const Price: ComponentWithChildren = ({ children }) => (
  <div className="font-semibold text-red-700">{children}</div>
);

const TotalPrice: ComponentWithChildren = ({ children }) => (
  <div className="font-semibold text-red-700">{children}</div>
);

const Footer: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-col justify-between gap-2 p-1 basis-24">
    {children}
  </div>
);

const QCWrapper: ComponentWithChildren = ({ children }) => (
  <div className="">{children}</div>
);

type ButtonProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
const Button = ({ children, onClick }: ButtonProps) => (
  <button
    className="px-1 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-800 active:bg-red-900"
    onClick={onClick}
  >
    {children}
  </button>
);

/**********************
 * Utilities
 */

function getMainImage(orderedProduct: OrderedProductType) {
  // If the product is a variant, return the image of the variant
  if (orderedProduct.selectedVariant) {
    return orderedProduct.selectedVariant.image;
  }

  const mainImage = orderedProduct.images.find(
    (image) => image.id === orderedProduct.mainImageID
  );

  if (!mainImage) {
    throw new Error("Main image not found");
  }

  return mainImage;
}
