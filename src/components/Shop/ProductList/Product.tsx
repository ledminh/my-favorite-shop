import { ComponentWithChildren } from "@/types";

import Image from "next/image";
import Link from "next/link";
import type { Product as ProductType } from "@/types";

import { H3, H4 } from "@/theme/typography";
import Footer from "./Footer";
type Props = {
  product: ProductType;
};

export default function Product({ product }: Props) {
  const mainImage = getMainImage(product);

  return (
    <Link
      href={product.link}
      className="flex flex-col justify-between h-full overflow-hidden rounded-md shadow-lg shadow-neutral-400 hover:ring-4 group"
    >
      <ImageWrapper>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
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
  return <div className="p-3">{children}</div>;
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
