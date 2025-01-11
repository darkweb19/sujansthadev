import { sendMail } from "@/utils/Mailer";
import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { firstname, lastname, email, message } = await req.json();

		//! server side validation
		if (!firstname || !lastname || !email || !message) {
			throw new Error("All fields are required.");
		}

		try {
			const user = await prisma.user.create({
				data: {
					firstname: firstname,
					lastname: lastname,
					email: email,
					message: message,
				},
			});
		} catch (error) {
			console.log("Error connecting to the database.", error);
		}

		console.log("sent success");
		await sendMail({ email, emailType: "me", message, firstname });
		await sendMail({ email, emailType: "user", message, firstname });

		return NextResponse.json({ success: true });
	} catch (err: any) {
		console.log(err.message);
		return NextResponse.json({ success: false, error: err.message });
	}
}
