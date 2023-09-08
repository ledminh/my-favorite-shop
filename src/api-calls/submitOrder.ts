import { OrderToSubmit, WithID } from "@/types";
import getStripe from "@/utils/getStripeJS";

export default async function submitOrder(order: OrderToSubmit) {
  const orderToSubmit = (await fetch("/api/orders?action=submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  }).then((res) => res.json())) as WithID<OrderToSubmit>;

  const stripe = await getStripe();

  const res = await stripe!.redirectToCheckout({ sessionId: orderToSubmit.id });

  if (res.error) {
    throw new Error(res.error?.message);
  }
}
