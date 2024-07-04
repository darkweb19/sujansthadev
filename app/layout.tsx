import NavBar from "@/components/Notes/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Copyrights from "@/components/Portfolio/Copyright";
import { Divider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

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
		<html suppressHydrationWarning lang="en">
			<body className={`${inter.className} `}>
				<NavBar />
				{children}
				<Analytics />
				<Divider className="my-2" />
				<Copyrights />
				<Toaster position="bottom-right" />
			</body>
		</html>
	);
}
