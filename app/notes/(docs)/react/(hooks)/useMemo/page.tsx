import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { Code } from "@nextui-org/react";
import CodePreview from "@/components/Notes/CodePreview";
import { practicalExampleCode, syntaxCode } from "./code";
import WarningNote from "@/components/Notes/WarninNote";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "What is useMemo hook  | React JS",
		description:
			"Learn how to boost the performance of your React applications by leveraging the useMemo hook. Explore memoization techniques to efficiently handle expensive computations and ensure your components only recalculate when necessary, improving overall rendering efficiency.",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="#"
				nextdisabled
				prevLink="/notes/react/useCallback"
			/>
			<div className="border w-full">
				<div>
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useMemo Hook
					</h1>
					<div className="p-1 sm:p-2 sm:pl-4 sm:pr-10">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useMemo Hooks in React?
						</h1>
						<p
							className={`${inter.className} flex justify-center  text-justify px-1`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							<div>
								<Code className="font-semibold">`useMemo`</Code>{" "}
								is a React Hook that is used to memoize the
								result of a function so that it is only
								recomputed when its dependencies change. It is
								similar to useCallback Hook. The main difference
								is useMemo returns a memoized value and
								useCallback returns a memoized function.
							</div>
						</p>
						<WarningNote content="The useMemo Hook only runs when any of its dependencies update. " />
						<div className="p-1 px-2 sm:px-4">
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								Syntax :
							</h2>
							<div className="p-2">
								<CodePreview code={`${syntaxCode}`} />
							</div>
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								Practical Example :
							</h2>
							<div className="p-3">
								<CodePreview
									code={`${practicalExampleCode}`}
									lines={[4, 5, 6, 7]}
								/>
							</div>
							<h2
								className={`${ubuntu.className} mt-2 text-2xl font-medium`}
							>
								Explanation :
							</h2>
							<p
								className={`${inter.className} flex justify-center  text-justify px-1`}
							>
								<div className="px-2">
									In this example, the{" "}
									<Code className="font-semibold">
										{" "}
										`totalCompletedTasks`{" "}
									</Code>
									variable is memoized using{" "}
									<Code className="font-semibold">
										`useMemo`{" "}
									</Code>
									. The memoized value is only recalculated
									when the completedTasks array changes. This
									ensures that the calculation is optimized
									and doesn&apos;t occur unnecessarily on each
									render, improving the performance of the
									component.
								</div>
							</p>
						</div>

						<SuccessNote content="Caching return values like this is also known as memoization, which is why this Hook is called useMemo." />
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="#"
				prevLink="/notes/react/useCallback"
				nextdisabled
			/>
		</div>
	);
}
