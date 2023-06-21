import { FC, ReactNode } from "react";
import ShippingAddress from "./components/cart/ShippingAddress";

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

export type Promotion =
  | {
      type: "discount";
      discountPercent: number;
      description: string;
    }
  | {
      type: "sale";
      salePrice: number;
      description: string;
    };

export type Product = {
  id: string;
  link: string;
  name: string;
  price: number;
  intro: string;
  description: string;
  mainImageID: string;
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  promotion?: Promotion;
};

export type Order = {
  id: string;
  shippingAddress: ShippingAddress;
  orderedProducts: OrderedProduct[];
  shippingFee: number;
  taxes: number;
  paymentInfo: PaymentInfo;
};

/**********************
 * Other types
 */
type ShippingAddress = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  country: string;
  address: string;
  state: string;
  zip: string;
};

type OrderedProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  intro: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
};

type PaymentInfo = {
  cardType: "Visa" | "MasterCard" | "American Express";
  lastFourDigits: string;
  expireDate: Date;
};
