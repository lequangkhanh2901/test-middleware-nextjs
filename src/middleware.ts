import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.cookies.get("_lang")?.value);

  const pathname = request.nextUrl.pathname;

  const getLangInPathname = pathname.split("/")[1];

  if (getLangInPathname !== "en" && getLangInPathname !== "vi") {
    let lang = request.cookies.get("_lang")?.value || "en";

    console.log(lang);

    return NextResponse.redirect(new URL(`/${lang}${pathname}`, request.url));
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
