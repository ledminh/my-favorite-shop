"use client";

import { Product as ProductType } from "@/types";
import { ComponentWithChildren } from "@/types";
import Image from "next/image";
import QuantityControl from "@/components/QuantityControl";

type Props = {
  product: ProductType;
};

export default function Product({ product }: Props) {
  const mainImage = getMainImage(product);

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
        <Name>{product.name}</Name>
        <Price>$100</Price>
      </Content>
      <Function>
        <QCWrapper>
          <QuantityControl quantity={5} setQuantity={() => {}} />
        </QCWrapper>
        <Button>REMOVE</Button>
      </Function>
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
  <div className="flex flex-col justify-between basis-auto">{children}</div>
);

const Name: ComponentWithChildren = ({ children }) => (
  <div className="font-semibold">{children}</div>
);

const Price: ComponentWithChildren = ({ children }) => (
  <div className="text-red-600">{children}</div>
);

const Function: ComponentWithChildren = ({ children }) => (
  <div className="flex flex-col justify-between gap-2 p-1 basis-24">
    {children}
  </div>
);

const QCWrapper: ComponentWithChildren = ({ children }) => (
  <div className="">{children}</div>
);

const Button: ComponentWithChildren = ({ children }) => (
  <button className="px-1 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-800 active:bg-red-900">
    {children}
  </button>
);

/**********************
 * Utilities
 */

function getMainImage(product: ProductType) {
  const mainImage = product.images.find(
    (image) => image.id === product.mainImageID
  );

  if (!mainImage) {
    throw new Error("Main image not found");
  }

  return mainImage;
}
