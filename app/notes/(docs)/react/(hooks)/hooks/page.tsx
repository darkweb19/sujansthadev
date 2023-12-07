import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import WarningNote from "@/components/Notes/WarninNote";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Introduction to Hooks  | React JS",
		description: "What are react hooks and why they are used?",
	};
}

export default function ReactHooks() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useState"
				prevLink="/notes/react/lists"
			/>

			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React Hooks
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Hooks are functions that let you “hook into” React
							state and lifecycle features from function
							components..They let you use state and other React
							features without writing a class.
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Things to know before using hooks in :
						</h1>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							You must import hook first
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Import it from React.
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Hooks can only be called in React Function
							Components.
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Hooks cannot be conditional
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Hooks can only be called at the top level of a
							component, meaning it can&apos;t be called from
							inside a block, i.e. {`{}`}.
						</p>

						<WarningNote content="React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. " />
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							The most commonly used hooks are :
						</h1>

						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 px-5  text-justify`}
						>
							<span className="border h-fit font-semibold text-base">
								1.
							</span>
							<Link
								className="text-blue-500"
								href="/notes/react/useState"
							>
								useState Hook
							</Link>
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 px-5  text-justify`}
						>
							<span className="border  h-fit font-semibold text-base">
								2.
							</span>
							<Link
								className="text-blue-500"
								href="/notes/react/useEffect"
							>
								useEffect Hook
							</Link>
						</p>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 px-5  text-justify`}
						>
							<span className="border h-fit font-semibold text-base">
								3.
							</span>
							<Link
								className="text-blue-500"
								href="/notes/react/useRef"
							>
								useRef Hook
							</Link>
						</p>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useState"
				prevLink="/notes/react/lists"
			/>
		</div>
	);
}
