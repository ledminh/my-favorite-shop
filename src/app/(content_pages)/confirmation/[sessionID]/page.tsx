import { v4 as uuidv4 } from "uuid";

import { Order, WithID } from "@/types";

import { addOrder, getOrderToSubmit, deleteOrderToSubmit } from "@/data/orders";

import getPrice, { ItemType } from "@/utils/getPrice";

import type { Stripe } from "stripe";
import Content from "./Content";

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
      Number(
        getPrice(
          orderedProduct.selectedVariant ?? (orderedProduct as ItemType)
        ).toFixed(2)
      ) *
        orderedProduct.quantity,
    0
  );

  return (
    <Content
      orderID={orderID}
      orderedProducts={orderedProducts}
      subTotal={subTotal}
      shippingFee={shippingFee}
      taxes={taxes}
      shippingAddress={shippingAddress}
    />
  );
}
