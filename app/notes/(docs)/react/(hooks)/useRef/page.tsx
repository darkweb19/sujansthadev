import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import WarningNote from "@/components/Notes/WarninNote";
import CodePreview from "@/components/Notes/CodePreview";
import { domCode, prevCode } from "./code";
import { inter, lilitaFont, ubuntu } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "What is useRef Hook | React JS",
		description: "Introduction to useRef and its usecases.",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useContext"
				prevLink="/notes/react/useEffect"
			/>
			<div className=" w-full">
				<div className="">
					<h1
						className={`${lilitaFont.className} text-4xl dark:text-slate-200 light:text-gray-700`}
					>
						useRef Hook
					</h1>
					<div className="p-2 pl-3 sm:pr-10">
						<h1
							className={`${ubuntu.className} text-3xl py-3 font-medium dark:text-slate-200 light:text-slate-black`}
						>
							What are useRef Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex justify-center  text-justify px-1`}
						>
							<span className=" py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							useRef is a React Hook that lets you reference a
							value that&apos;s not needed for rendering.It can
							also be used to access a DOM element directly.
						</p>
						<SuccessNote content="This means , value changed does not cause a re-render." />
						<div className="px-3">
							<h2
								className={`${ubuntu.className} text-2xl py-2 mt-2 font-medium dark:text-slate-200 light:text-slate-black`}
							>
								The primary use cases for useRef includes:
							</h2>
							<p
								className={`${ubuntu.className} flex mt-2 font-medium gap-1 items-center text-xl text-justify`}
							>
								<span className=" py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Accessing DOM elements
							</p>
							<div className="px-4">
								<p
									className={`${inter.className} flex gap-1 mt-1 px-4 items-center text-lg text-justify`}
								>
									One of the most common use cases of `useRef`
									is accessing DOM elements. Instead of using
									document.getElementById or other DOM
									queries, you can use useRef to directly
									reference an element within your component.
								</p>
								<CodePreview code={`${domCode}`} lines={[3]} />
							</div>
							<p
								className={`${inter.className} flex gap-1 mt-4 items-center text-xl text-justify`}
							>
								<span className=" py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Storing previous values
							</p>
							<p
								className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
							>
								<span className=" py-1 h-fit text-xs"></span>
								You can use useRef to store a value that
								persists across renders but doesn&apos;t trigger
								a re-render when updated. This can be useful
								when you need to keep track of previous values
								without triggering unnecessary renders.
							</p>
							<CodePreview
								code={`${prevCode}`}
								lines={[5, 6, 9, 10]}
							/>
							<WarningNote content="Also, note that `useRef` is not limited to working with DOM elements; it can be used for any mutable value that you want to persist across renders without causing re-renders." />
						</div>
						<h1
							className={`${ubuntu.className} text-3xl mt-4 py-2 font-medium dark:text-slate-200 light:text-slate-black`}
						>
							Refinement
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-1 p-2 items-center text-lg text-justify`}
						>
							<span className=" py-1 h-fit text-xs"></span>
							`useRef` is a powerful hook in React.js that enables
							developers to efficiently access and modify DOM
							elements, preserve values, and manage state without
							triggering unnecessary re-renders. Its versatility
							makes it an indispensable tool in a developer&apos;s
							toolkit, allowing for enhanced control and
							performance optimization in React applications. By
							mastering the use cases and practical
							implementations demonstrated in this article,
							developers can leverage the full potential of useRef
							to build more robust and efficient React components.
						</p>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useContext"
				prevLink="/notes/react/useEffect"
			/>
		</div>
	);
}
