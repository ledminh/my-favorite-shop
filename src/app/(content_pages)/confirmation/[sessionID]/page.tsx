import { v4 as uuidv4 } from "uuid";

import Image from "next/image";

import { ComponentWithChildren, Order, WithID } from "@/types";

import ConfirmHeroImage from "@/assets/images/confirm-hero-image.jpg";

import { addOrder, getOrderToSubmit, deleteOrderToSubmit } from "@/data/orders";

import Link from "next/link";
import OrderedProductList from "@/components/confirmation/OrderedProductList";
import Header from "@/components/confirmation/Header";
import getPrice, { ItemType } from "@/utils/getPrice";

import ShippingAddress from "@/components/ShippingAddress";

import type { Stripe } from "stripe";

type Props = {
  params: {
    sessionID: string;
  };
};

export default async function Confirmation({ params }: Props) {
  const { sessionID } = params;

  const orderToSubmit = await getOrderToSubmit(sessionID);

  const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

  const { total_details } = await stripe.checkout.sessions.retrieve(sessionID, {
    expand: ["total_details"],
  });

  if (!total_details) {
    throw new Error("No total details");
  }

  const { amount_tax, amount_shipping } = total_details;

  const newOrder: Omit<WithID<Order>, "createdAt" | "modifiedAt"> = {
    id: uuidv4().split("-")[0],
    orderedProducts: orderToSubmit.orderedProducts,
    shippingAddress: orderToSubmit.shippingAddress,
    shippingFee: (amount_shipping ?? 0) / 100,
    status: orderToSubmit.status,
    taxes: amount_tax,
  };

  const order = await addOrder(newOrder);

  await deleteOrderToSubmit(sessionID);

  const {
    id: orderID,
    orderedProducts,
    shippingFee,
    taxes,
    shippingAddress,
  } = order;

  const subTotal = orderedProducts.reduce(
    (total, orderedProduct) =>
      total +
      getPrice(orderedProduct.selectedVariant ?? (orderedProduct as ItemType)) *
        orderedProduct.quantity,
    0
  );
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
      <Content>
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
      </Content>
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

const Content: ComponentWithChildren = ({ children }) => (
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
      <dd className="text-gray-900">${subTotal.toFixed()}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Shipping</dt>
      <dd className="text-gray-900">${shipping.toFixed(2)}</dd>
    </div>

    <div className="flex justify-between">
      <dt>Taxes</dt>
      <dd className="text-gray-900">${taxes.toFixed(2)}</dd>
    </div>

    <div className="flex items-center justify-between pt-6 text-gray-900 border-t border-gray-200">
      <dt className="text-base">Total</dt>
      <dd className="text-base">${(subTotal + shipping + taxes).toFixed(2)}</dd>
    </div>
  </dl>
);
