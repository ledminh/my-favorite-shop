import { OrderStatus, OrderToSubmit, Order, WithID } from "@/types";

// import getOrderPrice from "@/utils/getOrderPrice";

import prismaClient from "../prismaClient";

export async function addOrderToSubmit(
  order: WithID<OrderToSubmit>
): Promise<void> {
  await prismaClient.orderToSubmit.create({
    data: {
      id: order.id,
      shippingAddress: JSON.stringify(order.shippingAddress),
      orderedProducts: order.orderedProducts.map((orderedProduct) =>
        JSON.stringify(orderedProduct)
      ),
      shippingFee: order.shippingFee,
      status: order.status,
    },
  });
}

export async function deleteOrderToSubmit(id: string): Promise<void> {
  await prismaClient.orderToSubmit.delete({
    where: {
      id,
    },
  });
}

export async function getOrderToSubmit(
  id: string
): Promise<WithID<OrderToSubmit>> {
  const orderToSubmit = await prismaClient.orderToSubmit.findUnique({
    where: {
      id,
    },
  });

  if (!orderToSubmit) throw new Error("Order not found");

  return {
    id: orderToSubmit.id,
    shippingAddress: JSON.parse(
      orderToSubmit.shippingAddress
    ) as WithID<OrderToSubmit>["shippingAddress"],
    orderedProducts: orderToSubmit.orderedProducts.map((orderedProduct) =>
      JSON.parse(orderedProduct)
    ) as WithID<OrderToSubmit>["orderedProducts"],
    shippingFee: orderToSubmit.shippingFee,
    status: orderToSubmit.status as OrderStatus,
  };
}

export async function addOrder(
  order: Omit<Order, "id" | "createdAt" | "modifiedAt">
): Promise<WithID<Order>> {
  const orderDB = await prismaClient.order.create({
    data: {
      shippingAddress: JSON.stringify(order.shippingAddress),
      orderedProducts: order.orderedProducts.map((orderedProduct) =>
        JSON.stringify(orderedProduct)
      ),
      shippingFee: order.shippingFee,
      taxes: order.taxes,
      paymentInfo: JSON.stringify({
        cardType: order.paymentInfo.cardType,
        lastFourDigits: order.paymentInfo.lastFourDigits,
        expireDate: order.paymentInfo.expireDate.toDateString(),
      }),
      status: order.status,
    },
  });

  const paymentInfo = JSON.parse(orderDB.paymentInfo);

  return {
    id: orderDB.id,
    shippingAddress: JSON.parse(
      orderDB.shippingAddress
    ) as WithID<Order>["shippingAddress"],
    orderedProducts: orderDB.orderedProducts.map((orderedProduct) =>
      JSON.parse(orderedProduct)
    ) as WithID<Order>["orderedProducts"],
    shippingFee: orderDB.shippingFee,
    taxes: orderDB.taxes,
    paymentInfo: {
      cardType: paymentInfo.cardType,
      lastFourDigits: paymentInfo.lastFourDigits,
      expireDate: new Date(paymentInfo.expireDate),
    },
    status: orderDB.status as OrderStatus,
    createdAt: orderDB.createdAt,
    modifiedAt: orderDB.modifiedAt,
  };
}

// type getOrdersProps = {
//   offset: number;
//   limit: number;
//   sortBy: "customer" | "price" | "createdAt" | "modifiedAt";
//   sortedOrder: "asc" | "desc";
//   searchTerm?: string;
//   filter: OrderStatus | null;
// };

// export function getOrders({
//   offset,
//   limit,
//   sortBy,
//   sortedOrder,
//   searchTerm,
//   filter,
// }: getOrdersProps): Promise<{ items: WithID<Order>[]; total: number }> {
// }

// export function deleteOrder(id: string): Promise<WithID<Order>> {
// }

// export function updateOrder(
//   id: string,
//   status: OrderStatus
// ): Promise<WithID<Order>> {

// }
