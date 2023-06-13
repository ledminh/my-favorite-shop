"use client";

import { ComponentWithChildren } from "@/types";
import Image from "next/image";

import { useState } from "react";

type Props = {
  images: { id: string; src: string; alt: string }[];
  mainImageID?: string;
};

export default function Gallery({ images, mainImageID }: Props) {
  const [mainImage, setMainImage] = useState(() => {
    const image = images.find((image) => image.id === mainImageID);

    if (!image) {
      throw new Error(`Image with id "${mainImageID}" not found`);
    }

    return image;
  });

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
  return <li className="h-[70px] w-[70px]">{children}</li>;
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
