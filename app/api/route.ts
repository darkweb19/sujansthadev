import prisma from "@/utils/Prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		await prisma.user.create({
			data: {
				name: "Sujan Shrestha",
				email: "sujansthadev@gmail.com",
				messages: {},
			},
		});

		// await prisma.message.create({
		// 	data: {
		// 		message: "Hello sujan , can you work for me ,",
		// 		authorId: "eda8dadd-99ca-4e43-894b-5893b7afc0a9",
		// 	},
		// });
		return NextResponse.json({ message: "Created" });
	} catch (err: any) {
		console.log(err.message);
		return NextResponse.json({ message: "Err : ", error: err.message });
	}
}
