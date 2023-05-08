import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import getTokenInfo from "./src/utils/getTokenInfo";

export default async function middleware(req: NextRequest) {
	const { cookies, nextUrl } = req;
	const { pathname, origin } = nextUrl;

	const token = cookies.get("authInfo")?.value;
	if (token) {
		if (pathname.includes("kayit-ol") || pathname.includes("giris-yap")) {
			return NextResponse.redirect(`${origin}/`);
		}
		return NextResponse.next();
	}
}
