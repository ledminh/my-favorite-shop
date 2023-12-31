import Link from "next/link";
import Image from "next/image";

import { Category, ComponentWithChildren } from "@/types";
import { H3 } from "@/theme/typography";

import { categoryFolder } from "@/theme/metadata";

type Props = {
  category?: Category;
  skeleton?: boolean;
};

export default function Card({ category, skeleton }: Props) {
  if (skeleton) {
    return <Skeleton />;
  }

  if (!category)
    throw new Error("Category prop is required for Category Card component");

  const { name, description, image, link } = category;

  return (
    <Wrapper link={categoryFolder + link}>
      <ImageWrapper>
        <Image
          src={image.src}
          alt={image.alt}
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageWrapper>
      <Title>
        <H3>{name}</H3>
      </Title>
      <Description>
        <span className="font-bold group-hover:text-blue-900">
          Description:{" "}
        </span>
        {description}
      </Description>
    </Wrapper>
  );
}

/**********************
 * Styles
 */
type WrapperProps = {
  children: React.ReactNode;
  link: string;
};

const Wrapper = ({ children, link }: WrapperProps) => {
  return (
    <Link
      href={link}
      className="relative block w-full h-full p-2 overflow-hidden border border-red-400 rounded-md hover:bg-red-400/10 hover:shadow-md hover:shadow-neutral-800 hover:-translate-y-2 hover:transition-all group hover:border-blue-900"
    >
      {children}
    </Link>
  );
};

const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 h-[150px] w-full md:relative md:block md:h-[240px] rounded-lg overflow-hidden mb-4 opacity-30 md:opacity-100">
      {children}
    </div>
  );
};

const Title: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex items-end h-full p-2 mb-2 font-semibold text-white border-2 border-red-600 rounded-md md:border-b md:border-b-red-400 md:p-0 md:h-auto md:border-0 md:rounded-none bg-black/95 md:bg-transparent md:text-black md:group-hover:text-blue-900 md:group-hover:border-b-blue-900">
      {children}
    </div>
  );
};

const Description: ComponentWithChildren = ({ children }) => {
  return <div className="hidden italic md:block">{children}</div>;
};

/***************
 * Components
 */
const Skeleton = () => (
  <div className="relative block w-full h-full p-2 overflow-hidden border border-red-400 rounded-md hover:bg-red-400/10 hover:shadow-md hover:shadow-neutral-800 hover:-translate-y-2 hover:transition-all">
    <div className="absolute top-0 left-0 h-[150px] w-full md:relative md:block md:h-[240px] rounded-lg overflow-hidden mb-4 opacity-30 md:opacity-100">
      <div className="w-full h-full bg-gray-300 animate-pulse" />
    </div>
    <div className="flex items-end h-full p-2 mb-2 font-semibold text-white border-2 border-red-600 rounded-md md:border-b md:border-b-red-400 md:p-0 md:h-auto md:border-0 md:rounded-none bg-black/95 md:bg-transparent md:text-black">
      <div className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />
    </div>
    <div className="italic">
      <div className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse" />{" "}
    </div>
  </div>
);
