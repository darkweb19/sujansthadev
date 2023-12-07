import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { lilitaFont, playpenSans, ubuntu } from "./layout";
import Link from "next/link";
import CardsUi from "@/components/Notes/Carding";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Coding Notes",
	description: "A passionate full-stack web developer from Nepal.",
	metadataBase: new URL("https://sujansthadev.com.np"),
};

export default function Notes() {
	return (
		<div className="h-fit w-full scroll-smooth">
			<div className="mt-20 h-80 flex flex-col justify-center items-center">
				<h1
					className={`${lilitaFont.className} text-4xl text-gray-700 font-normal`}
				>
					Memorizing snippets
				</h1>
				<h2
					className={`${playpenSans.className} text-2xl  text-light-green  font-medium`}
				>
					can be tedious while learning to{" "}
					<span
						className={`${ubuntu.className} text-dark-green text-3xl font-semibold`}
					>
						CODE.
					</span>{" "}
				</h2>
				<div className=" h-14 w-1/4 flex items-center justify-center gap-2">
					<Button
						radius="lg"
						className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-slate-white font-medium shadow-lg"
					>
						<Link href="#journey">Begin Your Journey</Link>
					</Button>
					<Button
						radius="lg"
						className="bg-black text-slate-white font-medium shadow-lg"
					>
						<Link href="/">Tech Stacks</Link>
					</Button>
				</div>
			</div>
			<Divider className="my-4" />

			<div
				id="journey"
				className="flex flex-col mt-6 items-center justify-center h-3/6 p-2"
			>
				<h1
					className={`${ubuntu.className} text-3xl text-gray-700 text-center font-medium`}
				>
					Explore Programming Languages
				</h1>

				<div className="  w-5/6  h-fit p-3">
					<CardsUi />
				</div>
			</div>

			<div className="h-screen"></div>
		</div>
	);
}
