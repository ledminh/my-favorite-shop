import Link from "next/link";
import Image from "next/image";
import { ComponentWithChildren, Category as CategoryType } from "@/types";

type Props = {
  isCurrent?: boolean;
  category?: CategoryType;
  skeleton?: boolean;
};

export default function Block({
  category,
  isCurrent,
  skeleton = false,
}: Props) {
  if (skeleton) {
    return (
      <DivWrapper>
        <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
        <span className="w-16 h-4 bg-gray-200 rounded-lg"></span>
      </DivWrapper>
    );
  }

  if (!category)
    throw new Error("Category prop is required for Category Block component");

  const { name, link, image } = category;

  let Wrapper = isCurrent ? DivWrapper : LinkWrapper;

  return (
    <Wrapper link={link}>
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
      <span>{name}</span>
    </Wrapper>
  );
}

/**********************
 * Styles
 */
const DivWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between w-20 gap-1 p-1 text-center bg-red-100 border rounded-md border-blue-950">
      {children}
    </div>
  );
};

type LinkWrapperProps = {
  link: string;
  children: React.ReactNode;
};

const LinkWrapper = ({ children, link }: LinkWrapperProps) => {
  return (
    <Link
      href={link}
      className="flex flex-col items-center justify-between w-20 gap-1 p-1 text-center border rounded-md border-blue-950 hover:bg-red-100"
    >
      {children}
    </Link>
  );
};

const ImageWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="relative w-[70px] h-[70px] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};
