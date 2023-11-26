import Navbar from "@/components/Notes/Navbar";
import { Metadata } from "next";
import {
	Lilita_One,
	Inter,
	Playpen_Sans,
	Ubuntu,
	Rubik,
} from "next/font/google";
import { Providers } from "../providers";

export const metadata: Metadata = {
	title: "Coding Notes",
	description: "A passionate full-stack web developer from Nepal.",
	metadataBase: new URL("https://sujansthadev.com.np"),
};

export const rubik = Rubik({ subsets: ["latin"] });

export const lilitaFont = Lilita_One({
	weight: "400",
	subsets: ["latin"],
});

export const playpenSans = Playpen_Sans({ subsets: ["latin"] });

export const ubuntu = Ubuntu({
	subsets: ["latin"],
	weight: "700",
});

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}{" "}
				</Providers>
			</body>
		</html>
	);
}