import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import React from "react";
import WarningNote from "@/components/Notes/WarninNote";
import CodePreview from "@/components/Notes/CodePreview";
import { listCode } from "./code";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "How to Set Up React | React JS",
		description: "Notes of React js including some snippets",
	};
}

export default function ReactLists() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/hooks"
				prevLink="/notes/react/conditionals"
			/>
			<div className="border w-full">
				<div>
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React List
					</h1>
					<div className="p-2 pl-4 sm:pr-10">
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In React, a list is a way to render multiple
							components or elements dynamically based on an array
							of data. Lists are a common pattern in web
							development, and React provides a convenient way to
							work with them.
						</p>
						<p
							className={`${inter.className} pl-6 text-lg text-justify`}
						>
							To render a list of elements in React, you typically
							map over an array of data and create React elements
							for each item in the array
						</p>
						<CodePreview code={`${listCode}`} />
						<p
							className={`${inter.className}  text-lg p-2 mt-2 text-justify`}
						>
							This is a basic example, and you can apply more
							complex logic when rendering each item in the list
							based on your specific requirements.
						</p>
						<WarningNote content="React provides a key prop for each element in a list to help with efficient rendering. The key prop is used to uniquely identify each item in the list." />
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/hooks"
				prevLink="/notes/react/conditionals"
			/>
		</div>
	);
}
