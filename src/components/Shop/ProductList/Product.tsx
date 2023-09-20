import { ComponentWithChildren } from "@/types";

import Image from "next/image";
import Link from "next/link";
import type { Product as ProductType } from "@/types";

import { H3, H4 } from "@/theme/typography";
import Footer from "./Footer";

import { productFolder } from "@/theme/metadata";

type Props = {
  product?: ProductType;
  skeleton?: boolean;
};

export default function Product({ product, skeleton = false }: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  if (!product) {
    throw new Error("Product is undefined");
  }

  const mainImage = getMainImage(product);

  const link = `${productFolder}/${product.link}`;

  return (
    <Link
      href={link}
      className="flex flex-col justify-between overflow-hidden rounded-md shadow-lg shadow-neutral-400 hover:ring-4 group"
    >
      <Content>
        <ImageWrapper>
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
            }}
            className="transition-all duration-300 group-hover:scale-110"
          />
          {product.promotion && (
            <Promotion>{product.promotion.description}</Promotion>
          )}
          {product.price && (
            <Price>
              {product.promotion && (
                <div className="text-sm text-white line-through">
                  ${product.price}
                </div>
              )}
              <H4>
                $
                {product.promotion
                  ? product.promotion.type === "discount"
                    ? (
                        product.price *
                        (1 - product.promotion.discountPercent / 100)
                      ).toFixed(2)
                    : product.promotion.salePrice
                  : product.price}
              </H4>
            </Price>
          )}
        </ImageWrapper>
        <Text>
          <Title>
            <H3>{product.name}</H3>
          </Title>
          <Intro>{product.intro}</Intro>
        </Text>
      </Content>
      {(!product.variants || product.variants.length === 0) && (
        <Footer product={product} />
      )}
    </Link>
  );
}

/*******************
 * Styles
 */
const Content: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col justify-start">{children}</div>;
};
const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="relative h-56 overflow-hidden">{children}</div>;
};

const Promotion: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute top-0 right-0 w-full px-2 font-bold text-center text-white transition-all duration-300 bg-red-800/90 group-hover:top-3">
      {children}
    </div>
  );
};
const Price: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute right-0 px-2 font-bold text-red-400 transition-all duration-300 bottom-1 bg-slate-700/75 group-hover:bottom-3 group-hover:scale-110">
      {children}
    </div>
  );
};

const Text: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col justify-start p-3">{children}</div>;
};

const Title: ComponentWithChildren = ({ children }) => {
  return <div className="font-bold">{children}</div>;
};

const Intro: ComponentWithChildren = ({ children }) => {
  return <div className="italic">{children}</div>;
};

/*********************
 * Components
 */
const Skeleton = () => (
  <div className="flex flex-col justify-between overflow-hidden rounded-md shadow-lg shadow-neutral-400 hover:ring-4 group">
    <div className="flex flex-col justify-start">
      <div className="w-full h-48 bg-gray-400"></div>
      <div className="flex flex-col items-start justify-between w-full h-12 p-3 bg-gray-200">
        <div className="w-1/4 h-4 bg-gray-300 rounded" />
      </div>
    </div>
    <div className="flex flex-col items-start justify-between w-full h-16 p-3 bg-gray-200">
      <div className="w-full h-4 bg-gray-300 rounded" />
      <div className="w-full h-4 bg-gray-300 rounded" />
    </div>
  </div>
);

/****************
 * Utils
 */

function getMainImage(product: ProductType) {
  const mainImage = product.images.find(
    (img) => img.id === product.mainImageID
  );
  if (!mainImage) {
    throw new Error(`Main image not found`);
  }
  return mainImage;
}
