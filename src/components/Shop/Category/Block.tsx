import Link from "next/link";
import Image from "next/image";
import { ComponentWithChildren } from "@/types";

type Props = {
  isCurrent?: boolean;
  name: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function Block({ name, link, image, isCurrent }: Props) {
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
    <div className="border border-blue-950 p-1 bg-red-100 flex justify-between items-center flex-col gap-1 rounded-md w-20 text-center">
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
      className="border border-blue-950 p-1 hover:bg-red-100 flex justify-between items-center flex-col gap-1 rounded-md w-20 text-center"
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
