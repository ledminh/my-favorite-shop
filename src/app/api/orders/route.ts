import { SubmitOrderResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import submit from "./submit";

export async function POST(
  request: NextRequest
): Promise<NextResponse<SubmitOrderResponse>> {
  try {
    const action = request.nextUrl.searchParams.get("action");

    if (action === "submit") {
      return submit(request);
    } else {
      throw new Error("action not found");
    }
  } catch (error: any) {
    return NextResponse.json({ errorMessage: error.message });
  }
}
