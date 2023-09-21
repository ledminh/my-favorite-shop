import getMultiple from "./getMultiple";

import { ProductResponse, ProductsResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
): Promise<NextResponse<ProductResponse | ProductsResponse>> {
  try {
    const type = request.nextUrl.searchParams.get("type");

    if (type === "multiple") {
      return getMultiple(request) as Promise<NextResponse<ProductsResponse>>;
    } else {
      throw new Error("type not found");
    }
  } catch (error: any) {
    return NextResponse.json({ errorMessage: error.message });
  }
}
