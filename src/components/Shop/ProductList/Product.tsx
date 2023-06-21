import { ComponentWithChildren } from "@/types";

import Image from "next/image";
import Link from "next/link";
import type { Product as ProductType } from "@/types";

import { H3, H4 } from "@/theme/typography";
import Footer from "./Footer";
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

  return (
    <Link
      href={product.link}
      className="flex flex-col justify-between overflow-hidden rounded-md shadow-lg shadow-neutral-400 hover:ring-4 group"
    >
      <div className="flex flex-col justify-start">
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
          <Price>
            <H4>${product.price}</H4>
          </Price>
        </ImageWrapper>
        <ContentWrapper>
          <Title>
            <H3>{product.name}</H3>
          </Title>
          <Intro>{product.intro}</Intro>
        </ContentWrapper>
      </div>
      <Footer />
    </Link>
  );
}

/*******************
 * Styles
 */
const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="relative h-56 overflow-hidden">{children}</div>;
};

const ContentWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="flex flex-col justify-start p-3">{children}</div>;
};

const Title: ComponentWithChildren = ({ children }) => {
  return <div className="font-bold">{children}</div>;
};

const Price: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute right-0 px-2 font-bold text-red-400 transition-all duration-300 bottom-1 bg-slate-700/75 group-hover:bottom-3 group-hover:scale-110">
      {children}
    </div>
  );
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
      <div className="w-full h-64 bg-gray-400"></div>
      <div className="flex flex-col items-start justify-between w-full h-20 p-3 bg-gray-200">
        <div className="w-1/2 h-4 bg-gray-300 rounded" />
        <div className="w-full h-4 bg-gray-300 rounded" />
      </div>
    </div>
    <div className="flex flex-col items-start justify-between w-full h-20 p-3 bg-gray-200">
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
