import { FC, ReactNode } from "react";
import OrderedProduct from "./components/confirmation/OrderedProduct";

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

export type OrderedProduct = Product & {
  quantity: number;
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
  streetAddress: string;
  state: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
};

type PaymentInfo = {
  cardType: "Visa" | "MasterCard" | "American Express";
  lastFourDigits: string;
  expireDate: Date;
};
