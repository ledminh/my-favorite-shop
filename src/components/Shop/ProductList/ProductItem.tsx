import { ComponentWithChildren } from "@/types";

import Image from "next/image";
import Link from "next/link";

type Props = {
  product: any;
};

export default function ProductItem({ product }: Props) {
  return (
    <Link href={product.link}>
      <ImageWrapper>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <Price>{product.price}</Price>
      </ImageWrapper>
      <ContentWrapper>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </ContentWrapper>
    </Link>
  );
}

/*******************
 * Styles
 */
const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="">{children}</div>;
};

const ContentWrapper: ComponentWithChildren = ({ children }) => {
  return <div className="">{children}</div>;
};

const Title: ComponentWithChildren = ({ children }) => {
  return <div className="">{children}</div>;
};

const Price: ComponentWithChildren = ({ children }) => {
  return <div className="">{children}</div>;
};

const Description: ComponentWithChildren = ({ children }) => {
  return <div className="">{children}</div>;
};
