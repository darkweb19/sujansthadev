import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import { Code } from "@nextui-org/code";
import React from "react";
import WarningNote from "@/components/Notes/WarninNote";

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
				nextLink="/notes/react/#"
				prevLink="/notes/react/conditionals"
			/>

			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React Lists
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
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
						<Code
							className="bg-slate-black text-light-white p-3 flex flex-col relative left-7"
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
							<span>{`import React from 'react';`} </span>
							<span className="mt-2">{`export const MyList = () => {`}</span>
							<span className="relative left-4">
								{`const data = ['Code', 'JavaScript', 'React' , 'Next']; `}
							</span>
							<span className="relative mt-1 left-9">{` return (`}</span>
							<span className="relative left-14">{`</ul>`}</span>
							<span className="relative left-16">
								{`{data.map((item, index) => (`}
							</span>
							<span className="relative left-20">
								{`<li key={index}>{item}</li>`}
							</span>
							<span className="relative left-16">{`))}`}</span>
							<span className="relative left-14">{`  </ul>`}</span>

							<span className="relative left-9">{`  );`}</span>
							<span>{`};`}</span>
						</Code>
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
				nextLink="/notes/react/#"
				prevLink="/notes/react/conditionals"
			/>
		</div>
	);
}
