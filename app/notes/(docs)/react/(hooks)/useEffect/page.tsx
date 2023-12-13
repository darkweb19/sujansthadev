import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { useEffectCode } from "./code";
import CodePreview from "@/components/Notes/CodePreview";

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
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
			<div className="border w-full">
				<div>
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useEffect Hook
					</h1>
					<div className="p-2 pl-4 sm:pr-10">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useEffect Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex justify-center  text-justify px-1`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							The Effect Hook lets you perform side effects in
							function components: Data fetching, setting up a
							subscription, and manually changing the DOM in React
							components are all examples of side effects. Whether
							or not you&apos;re used to calling these operations
							“side effects” (or just “effects”), you&apos;ve
							likely performed them in your components before.
						</p>
						<div className="px-3">
							<CodePreview code={`${useEffectCode}`} />
						</div>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
		</div>
	);
}
