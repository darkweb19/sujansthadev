import SocialLinks from "@/components/rightNavs/SocialLinks";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigations from "@/components/rightNavs/Navigations";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		template: "%s | Sujan Shrestha",
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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
