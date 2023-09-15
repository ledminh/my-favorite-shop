import { NextRequest, NextResponse } from "next/server";
import { getCustomerMessages } from "@/data/customerMessages";

import { CustomerMessageStatus, MessagesRequest } from "@/types";

export default async function getMultiple(request: NextRequest) {
  const offsetStr = request.nextUrl.searchParams.get("offset");
  const limitStr = request.nextUrl.searchParams.get("limit");
  const sortByStr = request.nextUrl.searchParams.get("sortBy");
  const orderStr = request.nextUrl.searchParams.get("order");
  const searchTermStr = request.nextUrl.searchParams.get("searchTerm");
  const filterStr = request.nextUrl.searchParams.get("filter");

  if (!sortByStr) {
    throw new Error("sortBy is required");
  }

  if (!orderStr) {
    throw new Error("order is required");
  }

  const { items: messages, total } = await getCustomerMessages({
    offset: offsetStr ? parseInt(offsetStr) : undefined,
    limit: limitStr ? parseInt(limitStr) : undefined,
    sortBy: sortByStr as MessagesRequest["sortBy"],
    order: orderStr as MessagesRequest["order"],
    searchTerm: searchTermStr ? searchTermStr : undefined,
    filter: filterStr ? (filterStr as CustomerMessageStatus) : null,
  });

  return NextResponse.json({
    data: {
      messages,
      total,
    },
  });
}
