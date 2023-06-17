import Link from "next/link";
import Image from "next/image";

import { Category, ComponentWithChildren } from "@/types";
import { H3 } from "@/theme/typography";

type Props = {
  category?: Category;
  skeleton?: boolean;
};

export default function Card({ category, skeleton }: Props) {
  if (skeleton) {
    return (
      <div className="block w-full h-full p-2 border border-red-400 rounded-md hover:bg-red-400/10 hover:shadow-md hover:shadow-neutral-800 hover:-translate-y-2 hover:transition-all">
        <div className="relative hidden md:block w-full h-[300px] rounded-lg overflow-hidden mb-4">
          <div className="w-full h-full bg-gray-300 animate-pulse" />
        </div>
        <div className="mb-2 font-semibold border-b border-b-red-400">
          <div className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />
        </div>
        <div className="italic">
          <div className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />{" "}
        </div>
      </div>
    );
  }

  if (!category)
    throw new Error("Category prop is required for Category Card component");

  const { name, description, image, link } = category;

  return (
    <Link
      href={link}
      className="block w-full h-full p-2 border border-red-400 rounded-md hover:bg-red-400/10 hover:shadow-md hover:shadow-neutral-800 hover:-translate-y-2 hover:transition-all"
    >
      <ImageWrapper>
        <Image
          src={image.src}
          alt={image.alt}
          style={{
            objectFit: "cover",
          }}
          fill
        />
      </ImageWrapper>
      <Title>
        <H3>{name}</H3>
      </Title>
      <Description>
        <span className="font-bold">Description: </span>
        {description}
      </Description>
    </Link>
  );
}

/**********************
 * Styles
 */
const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="relative hidden md:block w-full h-[300px] rounded-lg overflow-hidden mb-4">
      {children}
    </div>
  );
};

const Title: ComponentWithChildren = ({ children }) => {
  return (
    <div className="mb-2 font-semibold border-b border-b-red-400">
      {children}
    </div>
  );
};

const Description: ComponentWithChildren = ({ children }) => {
  return <div className="italic">{children}</div>;
};
