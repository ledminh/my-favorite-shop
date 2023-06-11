import { FC, ReactNode } from "react";

export type ComponentWithChildren = FC<{ children: ReactNode }>;

export type Category = {
  id: string;
  name: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
};

export type Product = {
  id: string;
  link: string;
  name: string;
  price: number;
  description: string;
  mainImageID: number;
  images: {
    src: string;
    alt: string;
  }[];
};
