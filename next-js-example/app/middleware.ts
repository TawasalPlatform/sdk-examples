import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.method === "HEAD") {
    return new NextResponse(null, { status: 200 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
