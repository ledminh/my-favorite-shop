import { NextRequest, NextResponse } from "next/server";
import { OrderToSubmit, OrderedProduct, WithID } from "@/types";
import { addOrderToSubmit } from "@/data/orders/supabase";
import getOrderedProductImage from "@/utils/getOrderedProductImage";
import getOrderedProductPrice from "@/utils/getOrderedProductPrice";

import type { Stripe } from "stripe";

const stripe: Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY!);

export default async function submit(request: NextRequest) {
  const orderToSubmit = (await request.json()) as OrderToSubmit;

  const params = createStripeParams(
    orderToSubmit.orderedProducts,
    orderToSubmit.shippingAddress.email,
    request
  );

  const session = await stripe.checkout.sessions.create(params);

  const orderToSubmitWithID: WithID<OrderToSubmit> = {
    id: session.id,
    ...orderToSubmit,
  };

  await addOrderToSubmit(orderToSubmitWithID);

  return NextResponse.json({
    data: orderToSubmitWithID,
  });
}

function createStripeParams(
  orderedProducts: WithID<OrderedProduct>[],
  email: string | undefined,
  req: NextRequest
) {
  const line_items = orderedProducts.map((product) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: product.name,
        images: [getOrderedProductImage(product).src],
      },
      unit_amount: Math.round(getOrderedProductPrice(product)) * 100,
      tax_behavior:
        "exclusive" as Stripe.Checkout.SessionCreateParams.LineItem.PriceData.TaxBehavior,
    },
    quantity: product.quantity,
  }));

  const params: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    submit_type: "pay",

    payment_method_types: ["card"],

    line_items: line_items,
    customer_email: email,
    automatic_tax: {
      enabled: true,
    },

    success_url: `${req.headers.get(
      "origin"
    )}/confirmation?temp_id={CHECKOUT_SESSION_ID}`,

    cancel_url: `${req.headers.get("origin")}/checkout`,
  };

  return params;
}