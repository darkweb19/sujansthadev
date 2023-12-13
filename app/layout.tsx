import NavBar from "@/components/Notes/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Copyrights from "@/components/middle/Copyright";
import { Divider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s ",
		default: "Sujan Shrestha",
	},
	description: "A passionate full-stack web developer from Nepal.",
	metadataBase: new URL("https://sujansthadev.com.np"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar />
				{children}
				<Analytics />
				<Divider className="my-2" />
				<Copyrights />
			</body>
		</html>
	);
}
