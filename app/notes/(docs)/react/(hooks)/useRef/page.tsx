import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, playpenSans, ubuntu } from "@/app/notes/layout";
import { Snippet } from "@nextui-org/snippet";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { Code } from "@nextui-org/react";
import WarningNote from "@/components/Notes/WarninNote";

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

			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useRef Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useRef Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							useRef is a React Hook that lets you reference a
							value that&apos;s not needed for rendering.It can
							also be used to access a DOM element directly.
						</p>
						<SuccessNote content="This means , value changed does not cause a re-render." />

						<div className="p-2">
							<h1
								className={`${ubuntu.className} text-3xl mt-2 font-medium text-slate-black`}
							>
								The primary use cases for useRef includes:
							</h1>
							<p
								className={`${inter.className} flex mt-2 font-medium gap-1 items-center text-xl text-justify`}
							>
								<span className="border py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Accessing DOM elements
							</p>
							<p
								className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
							>
								<span className="border py-1 h-fit text-xs"></span>
								One of the most common use cases of `useRef` is
								accessing DOM elements. Instead of using
								document.getElementById or other DOM queries,
								you can use useRef to directly reference an
								element within your component.
							</p>

							<Code
								className="bg-slate-black text-light-white p-3 mt-2 flex flex-col "
								size="md"
							>
								<div className="text-xs flex gap-1 m-1">
									<span className="text-[#FE5F57]">
										<FaCircle />
									</span>
									<span className="text-[#FEBC2E]">
										<FaCircle />
									</span>
									<span className="text-[#28C840]">
										<FaCircle />
									</span>
								</div>
								<span>
									{`import {useRef ,useState} from 'react';`}{" "}
								</span>
								<span className="mt-2">
									{`const App = () => {`}{" "}
								</span>
								<span className="relative left-7">
									{`const inputRef = useRef();`}
								</span>
								<span className="relative left-7">{`useEffect(() => {`}</span>
								<span className="hidden md:inline relative left-7 text-gray-400">{`//Focus on the input element when the component mounts`}</span>
								<span className="inline md:hidden relative left-7 text-gray-400">{`//Focus on the input element when the`}</span>
								<span className="inline md:hidden relative left-11 text-gray-400">{`component mounts`}</span>
								<span className="relative left-11">{`     inputRef.current.focus();`}</span>
								<span className="relative left-7">{`  },[]);`}</span>
								<span className="relative left-7 mt-3">{`return <input ref={inputRef} />;`}</span>
								<span>{`};`}</span>
								<span>{`export default App;`}</span>
							</Code>
							<p
								className={`${inter.className} flex gap-1 mt-4 items-center text-xl text-justify`}
							>
								<span className="border py-1 h-fit text-xs">
									<FaCircle />
								</span>
								Storing previous values
							</p>
							<p
								className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
							>
								<span className="border py-1 h-fit text-xs"></span>
								You can use useRef to store a value that
								persists across renders but doesn&apos;t trigger
								a re-render when updated. This can be useful
								when you need to keep track of previous values
								without triggering unnecessary renders.
							</p>
							<Code
								className="bg-slate-black text-light-white p-3 mt-2 flex flex-col "
								size="md"
							>
								<div className="text-xs flex gap-1 m-1">
									<span className="text-[#FE5F57]">
										<FaCircle />
									</span>
									<span className="text-[#FEBC2E]">
										<FaCircle />
									</span>
									<span className="text-[#28C840]">
										<FaCircle />
									</span>
								</div>
								<span>
									{`import {useRef ,useEffect} from 'react';`}{" "}
								</span>
								<span className="mt-2">
									{`const PrevValueApp = ({ value }) => {`}{" "}
								</span>
								<span className="relative left-7">
									{`const prevValueRef = useRef();`}
								</span>
								<span className="relative mt-2 left-7">{`useEffect(() => {`}</span>
								<span className="relative left-11">{` prevValueRef.current = value;`}</span>
								<span className="relative left-7">{`  },[value]);`}</span>
								<span className="relative left-7 mt-3">{`return (`}</span>
								<span className="relative left-12">{`<div>`}</span>
								<span className="relative left-16">{` <p>Current Value: {value}</p>`}</span>
								<span className="relative left-16">{` <p>Previous Value: {prevValueRef.current}</p>`}</span>
								<span className="relative left-12">{`</div>`}</span>
								<span className="relative left-7">{`);`}</span>
								<span>{`};`}</span>
								<span>{`export default PrevValueApp;`}</span>
							</Code>
						</div>
						<WarningNote content="Also, note that `useRef` is not limited to working with DOM elements; it can be used for any mutable value that you want to persist across renders without causing re-renders." />
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							Refinement
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-1 items-center text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xs"></span>
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
