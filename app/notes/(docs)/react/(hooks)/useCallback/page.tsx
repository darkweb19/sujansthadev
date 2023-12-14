import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import CodePreview from "@/components/Notes/CodePreview";
import { Code } from "@nextui-org/react";
import { callBackCode, usageCode } from "./code";
import SuccessNote from "@/components/Notes/SuccessNote";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "What are useCallback hooks? | React JS",
		description:
			"Clear and concise definition of useCallback hook and how it works. Also some code snippets are provided.",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useMemo"
				prevLink="/notes/react/useContext"
			/>
			<div className="border w-full">
				<div>
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useCallback Hook
					</h1>
					<div className="p-2 pl-1 sm:pl-4 sm:pr-10">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useCallback Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex justify-center  text-justify px-1`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							<div>
								`<Code>`useCallback`</Code>` is a React hook
								that is used to memoize functions, which helps
								in preventing unnecessary renders in your React
								components. It&apos;s particularly useful when
								working with child components that rely on
								function props. By using useCallback, you can
								avoid creating a new function instance on each
								render, optimizing performance.
							</div>
						</p>
						<p
							className={`${inter.className} flex justify-center  text-justify px-1`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							<div>
								If we don&apos;t use `<Code>`useCallback`</Code>
								` function would run on every render. This helps
								us to memoize resource intensive functions so
								that they will not automatically run on every
								render.
							</div>
						</p>
						<div className="px-3 py-2">
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								When to use `useCallback`:
							</h2>
							<p
								className={`${inter.className} flex justify-center gap-1 text-justify px-1`}
							>
								<span className="border py-1  h-fit text-sm">
									<FaCircle />
								</span>
								<div>
									If your function dependencies change
									frequently, and you notice unnecessary
									re-renders in child components, using{" "}
									<Code>`useCallback`</Code> can be
									beneficial.
								</div>
							</p>
							<p
								className={`${inter.className} flex justify-center gap-1 text-justify px-1`}
							>
								<span className="border py-1  h-fit text-sm">
									<FaCircle />
								</span>
								<div>
									When you need to pass functions as props to
									child components, using{" "}
									<Code>`useCallback`</Code> ensures that the
									function reference doesn&apos;t change
									unless its dependencies change.
								</div>
							</p>
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								Syntax :
							</h2>
							<div className="p-4">
								<CodePreview code={`${callBackCode}`} />
							</div>
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								Usage :
							</h2>
							<p
								className={`${inter.className} flex justify-center gap-1 text-justify `}
							>
								<span className="border py-1 h-fit text-sm">
									<FaCircle />
								</span>
								<div>
									Call <Code>`useCallback`</Code> at the top
									level of your component to cache a function
									definition between re-renders:
								</div>
							</p>
							<div className="px-4">
								<CodePreview code={`${usageCode}`} />
							</div>
							<SuccessNote content="You should only rely on useCallback as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useCallback back." />
						</div>
						<div className="px-3"></div>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useMemo"
				prevLink="/notes/react/useContext"
			/>
		</div>
	);
}
