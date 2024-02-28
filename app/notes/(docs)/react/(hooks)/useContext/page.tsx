import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import TopNavButtons from "@/components/Notes/TopNavButtons";
import CodePreview from "@/components/Notes/CodePreview";
import { allTiedTogtherCode, consumeCode, providerCode } from "./code";
import { inter, lilitaFont, ubuntu } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "What is useContext Hook? | React JS",
		description:
			"Notes useContext hook in react with some code snippets to walk through.",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useCallback"
				prevLink="/notes/react/useRef"
			/>
			<div className=" w-full">
				<main>
					<h1
						className={`${lilitaFont.className} text-4xl py-3 dark:text-slate-200 light:text-gray-700`}
					>
						useContext Hook
					</h1>
					<div className="p-2 sm:pr-8">
						<h1
							className={`${ubuntu.className} text-3xl font-medium  dark:text-slate-200 light:text-slate-black`}
						>
							What are useContext Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex justify-center  text-justify px-2`}
						>
							<span className="dark:text-slate-200 light: py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In React, the `useContext` hook is part of the Hooks
							API and is used for consuming a React context.
							Context provides a way to pass data through the
							component tree without having to pass props down
							manually at every level.
						</p>
						<div className="px-3">
							<h2
								className={`${ubuntu.className} mt-2 text-2xl py-2 font-medium  dark:text-slate-200 light:text-slate-black`}
							>
								Create Context
							</h2>
							<p
								className={`${inter.className} flex justify-center text-lg tracking-tight text-justify px-2`}
							>
								You need to create a context using
								`React.createContext`. This returns an object
								with two components: `Provider` and `Consumer`.
							</p>
							<div className="pl-2">
								<CodePreview
									code={`${`import { createContext } from "react";
							
const StateContext = createContext()`}`}
									lines={[3]}
								/>
							</div>
							<h2
								className={`${ubuntu.className} mt-2 py-2 text-2xl font-medium  dark:text-slate-200 light:text-slate-black`}
							>
								Provide Context
							</h2>
							<p
								className={`${inter.className} text-lg tracking-tight  text-justify px-2`}
							>
								Use the `Provider` component to wrap the part of
								your component tree where you want to make the
								context available.
							</p>
							<div className="pl-2">
								<CodePreview
									code={`${providerCode}`}
									lines={[2, 4]}
								/>
							</div>
							<h2
								className={`${ubuntu.className} mt-2 py-2 text-2xl font-medium  dark:text-slate-200 light:text-slate-black`}
							>
								Consume Context
							</h2>
							<p
								className={`${inter.className}   text-lg tracking-tight text-justify px-2`}
							>
								Now, you can use the `useContext` hook to access
								the value provided by the context within your
								functional component.
							</p>
							<div className="pl-2">
								<CodePreview
									code={`${consumeCode}`}
									lines={[5]}
								/>
							</div>
							<h3
								className={`${ubuntu.className} mt-2 text-xl py-2 font-medium  dark:text-slate-200 light:text-slate-black`}
							>
								Here&apos;s an example when all tied together:
							</h3>
							<div className="pl-2">
								<CodePreview code={`${allTiedTogtherCode}`} />
							</div>
						</div>
					</div>
				</main>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useCallback"
				prevLink="/notes/react/useRef"
			/>
		</div>
	);
}
