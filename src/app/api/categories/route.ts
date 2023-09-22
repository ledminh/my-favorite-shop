import { CategoriesResponse, CategoryResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import getMultiple from "./getMultiple";
import getSingle from "./getSingle";

export async function GET(
  request: NextRequest
): Promise<NextResponse<CategoryResponse | CategoriesResponse>> {
  try {
    const type = request.nextUrl.searchParams.get("type");

    switch (type) {
      case "single":
        return getSingle(request);
      case "multiple":
        return getMultiple(request);

      default:
        throw new Error("type not found");
    }
  } catch (error: any) {
    return NextResponse.json({ errorMessage: error.message });
  }
}
