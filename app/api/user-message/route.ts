import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { firstname, lastname, email, message } = await req.json();

		//! server side validation
		if (!firstname || !lastname || !email || !message) {
			throw new Error("All fields are required.");
		}

		const user = await prisma.user.create({
			data: {
				firstname: firstname,
				lastname: lastname,
				email: email,
				message: message,
			},
		});
		console.log("sent success");

		return NextResponse.json({ success: true });
	} catch (err: any) {
		console.log(err.message);
		return NextResponse.json({ success: false, error: err.message });
	}
}
