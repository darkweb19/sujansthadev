import prisma from "./Prisma";
import nodemailer from "nodemailer";

export const sendMail = async ({
	email,
	emailType,
	firstname,
	gemini_reply,
	message,
}: {
	email: string;
	emailType: "me" | "user";
	firstname: string;
	gemini_reply?: string;
	message: string;
}) => {
	try {
		//find the user based on userid
		const user = await prisma.user.findUnique({ where: { email } });

		// and send the email
		var transport = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.AUTH_USER,
				pass: process.env.AUTH_PASS,
			},
		});

		if (emailType === "me") {
			var mailing = {
				from: "Sujan Shrestha <me@sujansthadev.com.np>",
				to: "sujanstha3220@gmail.com",
				subject: "Someone Send you a message Sujan!!!",
				html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Our Family!</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">

<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
    <h1 style="text-align: center; color: #333333;">Some one send you a message! Please check the message  : </h1>
    <p> ${firstname} says : ${message} </p> 
	<p> Gemini Said : ${gemini_reply} </p>
    
    <p style="color: #666666;">Best regards,<br><a href="https://sujansthadev.com.np" style="color: #4CAF50;">Sujan Shrestha</a></p>
</div>

</body>
</html>
`,
			};

			await transport.sendMail(mailing);
			transport.verify((error, success) => {
				if (success) {
					console.log("message send to myslef");
				}
				if (error) {
					console.log("Message could not be send to me");
				}
			});
		} else if (emailType === "user") {
			var mailing = {
				from: "Sujan Shrestha <me@sujansthadev.com.np>",
				to: email,
				subject: "Greetings.....",
				html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Our Family!</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px;">

<div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">

<h1 style="text-align: center; color: #333333;">Thank you for reaching out to me!</h1>

<p style="color: #666666;">Dear <span style="color: #007bff; text-transform: uppercase;">${firstname.toUpperCase()}</span>,</p>

<p style="color: #666666;">I hope this automated email finds you well.</p>
<p style="color: #666666;">I'll be sure to get back to you real soon.</p>
<p style="color: #666666;">Your message is greatly appreciated, and I'm excited to respond. Please bear with me, as I'll be getting back to you promptly.</p>
<p style="color: #666666;">If you have any questions, concerns, or just want to say hello, feel free to reach out to me at <a href="mailto:me@sujansthadev.com.np" style="color: #007bff; text-decoration: none;"><span style="color: #4CAF50;">me@sujansthadev.com.np</span></a>. I'm here for you!</p>
<p style="color: #666666;">Once again, thank you for taking the time to connect!</p>
<p style="color: #666666;">Best regards,<br><a href="https://sujansthadev.com.np" style="color: #4CAF50;">Sujan Shrestha</a></p>

</div>

</body>
</html>
`,
			};

			await transport.sendMail(mailing);
			transport.verify((error, success) => {
				if (success) {
					console.log("message send to the user");
				}
				if (error) {
					console.log("Message could not be send to user");
				}
			});
		}
	} catch (error: any) {
		console.log(error.message);
		return { success: false };
	}
};
