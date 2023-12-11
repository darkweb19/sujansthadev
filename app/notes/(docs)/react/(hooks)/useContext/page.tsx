import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, playpenSans, ubuntu } from "@/app/notes/layout";
import { Snippet } from "@nextui-org/snippet";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "How to Set Up React | React JS",
		description: "Notes of React js including some snippets",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/react-jsx"
				prevLink="/notes/react/"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						Use Context Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<p className={`${playpenSans.className}`}>
							This documentation is still being written. Please
							check back later. Sorry For the inconvenience.
						</p>
					</div>
				</div>
			</div>

			{/* <TopNavButtons
				nextLink="/notes/react/react-jsx"
				prevLink="/notes/react/"
			/> */}
		</div>
	);
}
