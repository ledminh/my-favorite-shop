"use client";

import ShippingAddress from "@/components/ShippingAddress";

import { OrderedProduct, ComponentWithChildren, WithID } from "@/types";

import Image from "next/image";

import Header from "@/components/confirmation/Header";
import ConfirmHeroImage from "@/assets/images/confirm-hero-image.jpg";

import OrderedProductList from "@/components/confirmation/OrderedProductList";

import Link from "next/link";
import useCart from "@/utils/useCart";
import { useEffect } from "react";

export default function Content(props: {
  orderID: string;
  orderedProducts: WithID<OrderedProduct>[];
  subTotal: number;
  shippingFee: number;
  taxes: number;
  shippingAddress: ShippingAddress;
}) {
  const {
    orderID,
    orderedProducts,
    subTotal,
    shippingFee,
    taxes,
    shippingAddress,
  } = props;

  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <Wrapper>
      <HeroImage>
        <Image
          src={ConfirmHeroImage}
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
        />
      </HeroImage>
      <ContentWrapper>
        <Header orderID={orderID} />
        <TrackingNumber number={orderID} />
        <OrderedProductList orderedProducts={orderedProducts} />
        <Total subTotal={subTotal} shipping={shippingFee} taxes={taxes} />
        <Footer>
          <ShippingAddress shippingAddress={shippingAddress} />
        </Footer>
        <Navigation>
          <Link
            href="/shop"
            className="flex justify-end gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500 group"
          >
            Continue Shopping
            <span
              aria-hidden="true"
              className="inline-block transition-all duration-200 group-hover:translate-x-1"
            >
              {" "}
              &rarr;
            </span>
          </Link>
        </Navigation>
      </ContentWrapper>
    </Wrapper>
  );
}

/****************
 * Styles
 */
const Wrapper: ComponentWithChildren = ({ children }) => (
  <div className="relative lg:min-h-full">{children}</div>
);

const HeroImage: ComponentWithChildren = ({ children }) => (
  <div className="relative overflow-hidden h-80 lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
    {children}
  </div>
);

const ContentWrapper: ComponentWithChildren = ({ children }) => (
  <div className="px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
    <div className="lg:col-start-2">{children}</div>
  </div>
);

const Footer: ComponentWithChildren = ({ children }) => (
  <dl className="grid grid-cols-2 mt-16 text-sm text-gray-600 gap-x-4">
    {children}
  </dl>
);

const Navigation: ComponentWithChildren = ({ children }) => (
  <div className="py-6 mt-16 text-right border-t border-gray-200">
    {children}
  </div>
);

/*******************
 * Components
 */

type TrackingNumberProps = {
  number: string;
};

const TrackingNumber = ({ number }: TrackingNumberProps) => (
  <dl className="mt-16 text-sm font-medium">
    <dt className="text-gray-900">Tracking number</dt>
    <dd className="mt-2 text-blue-600">{number}</dd>
  </dl>
);

type TotalProps = {
  subTotal: number;
  shipping?: number;
  taxes?: number;
};

const Total = ({ subTotal, shipping = 8, taxes = 4.3 }: TotalProps) => (
  <dl className="pt-6 space-y-6 text-sm font-medium text-gray-500 border-t border-gray-200">
    <div className="flex justify-between">
      <dt>Subtotal</dt>
      <dd className="text-gray-900">
        ${Number(subTotal.toFixed(2)).toLocaleString()}
      </dd>
    </div>

    <div className="flex justify-between">
      <dt>Shipping</dt>
      <dd className="text-gray-900">
        ${Number(shipping.toFixed(2)).toLocaleString()}
      </dd>
    </div>

    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-gray-900">
        ${Number(taxes.toFixed(2)).toLocaleString()}
      </dd>
    </div>

    <div className="flex items-center justify-between pt-6 text-gray-900 border-t border-gray-200">
      <dt className="text-base">Total</dt>
      <dd className="text-base">
        ${Number((subTotal + shipping + taxes).toFixed(2)).toLocaleString()}
      </dd>
    </div>
  </dl>
);
