import { OrderStatus, OrderToSubmit, WithID } from "@/types";

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
