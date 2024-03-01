import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	return NextResponse.json({ mesage: "Hello from API User" });
}
