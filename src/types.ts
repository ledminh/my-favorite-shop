import { FC, ReactNode } from "react";
import OrderedProduct from "./components/confirmation/OrderedProduct";
import Variant from "./components/product/Variants/Variant";

export type ComponentWithChildren = FC<{ children: ReactNode }>;

/**********************
 * Category types
 */

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

/**********************
 * Product types
 */
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

export type Variant = {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  price: number;
  shown: boolean;
  promotion?: Promotion;
};

export type Product = {
  id: string;
  category: Category;
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
  variants?: Variant[];
};

export type OrderedProduct = Product & {
  quantity: number;
  selectedVariant?: Variant;
};

/**********************
 * Order types
 */

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
