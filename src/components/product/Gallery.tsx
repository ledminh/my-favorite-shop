"use client";

import { ComponentWithChildren } from "@/types";
import Image from "next/image";

import { useState } from "react";

type Props = {
  images?: { id: string; src: string; alt: string }[];
  mainImageID?: string;
  skeleton?: boolean;
};

export default function Gallery({
  images,
  mainImageID,
  skeleton = false,
}: Props) {
  const [mainImage, setMainImage] = useState(() => {
    const image = images
      ? images.find((image) => image.id === mainImageID)
      : undefined;

    return image;
  });

  if (skeleton) {
    return (
      <Wrapper>
        <MainImage>
          <div className="h-[320px] w-[320px] rounded-lg bg-gray-200 animate-pulse"></div>
        </MainImage>
        <List>
          <Item>
            <div className="h-[55px] w-[55px] rounded-lg bg-gray-200 animate-pulse"></div>
          </Item>
          <Item>
            <div className="h-[55px] w-[55px] rounded-lg bg-gray-200 animate-pulse"></div>
          </Item>
          <Item>
            <div className="h-[55px] w-[55px] rounded-lg bg-gray-200 animate-pulse"></div>
          </Item>
          <Item>
            <div className="h-[55px] w-[55px] rounded-lg bg-gray-200 animate-pulse"></div>
          </Item>
        </List>
      </Wrapper>
    );
  }

  if (!images || !mainImage) {
    throw new Error("No images provided");
  }

  return (
    <Wrapper>
      <MainImage>
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </MainImage>
      <List>
        {images.map((image) => {
          return (
            <Item key={image.id}>
              <Button onClick={() => setMainImage(image)}>
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Button>
            </Item>
          );
        })}
      </List>
    </Wrapper>
  );
}

/************************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {children}
    </div>
  );
};

const MainImage: ComponentWithChildren = ({ children }) => {
  return (
    <div className="relative h-[320px] w-[320px] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};

const List: ComponentWithChildren = ({ children }) => {
  return <ul className="flex justify-center gap-2">{children}</ul>;
};

const Item: ComponentWithChildren = ({ children }) => {
  return <li className="h-[55px] w-[55px]">{children}</li>;
};

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="relative w-full h-full overflow-hidden rounded-lg hover:ring-2 hover:ring-offset-4 hover:ring-offset-gray-200 hover:ring-gray-900"
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
};
