import Navbar from "@/components/Notes/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
export const metadata: Metadata = {
	title: {
		template: " Notes",
		default: "Coding Notes",
	},
	description: "A passionate full-stack web developer from Nepal.",
	metadataBase: new URL("https://sujansthadev.com.np"),
};
const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}{" "}
			</body>
		</html>
	);
}
