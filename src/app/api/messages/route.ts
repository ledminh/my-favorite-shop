import { MessageResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import add from "./add";

export async function POST(
  request: NextRequest
): Promise<NextResponse<MessageResponse>> {
  try {
    const action = request.nextUrl.searchParams.get("action");

    if (action === "add") {
      return add(request);
    } else {
      throw new Error("action not found");
    }
  } catch (error: any) {
    return NextResponse.json({ errorMessage: error.message });
  }
}
