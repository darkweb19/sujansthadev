import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import { Code } from "@nextui-org/code";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Components in React | React JS",
		description: "What are Components in React and its types.",
	};
}

export default function ReactComponents() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/props"
				prevLink="/notes/react/react-jsx"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col pl-4 sm:pl-1 justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React Components
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							Definition
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							React Components are like a functions that basically
							returns HTML elements. It is a building block of
							react application and dividing the code into
							components so that it can be reuse , making it
							easier to debug as well.
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Types of Components
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							There are two types of Components in React
						</p>

						<p
							className={`${inter.className}text-lg flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Function Based Components
						</p>
						<p
							className={`${inter.className} text-lg relative bottom-2 flex items-center gap-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Class Based Components
						</p>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Class Based Components
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Class-based components are a type of React component
							that was prevalent before the introduction of React
							Hooks.
						</p>
						<p
							className={`${inter.className} flex gap-1 pl-7 text-lg text-justify`}
						>
							They are ES6 classes that extend from
							React.Component and have a render method. Class
							components are used to define the behavior and
							structure of a UI element in a React application.
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
							<span>
								{`import React, { Component } from 'react';`}{" "}
							</span>
							<span>
								{`class MyComponent extends Component {`}
							</span>
							<span className="relative left-4">
								{`  render() {`}
							</span>
							<span className="relative left-9">
								{`  return(`}
							</span>
							<span className="relative left-14">
								{`  <div>`}
							</span>
							<span className="relative left-20">
								{`  <p>This is a class-based component.</p> `}
							</span>
							<span className="relative left-14">
								{`  </div>`}
							</span>
							<span className="relative left-9">{`  );`}</span>
							<span className="relative left-4">{` }`}</span>
							<span>{` }`}</span>
						</Code>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Function Based Components
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							With the introduction of React Hooks, functional
							components can now manage state and side effects,
							making them more powerful and capable of handling
							complex logic previously associated with class
							components. Hooks allow you to use state and other
							React features in functional components without the
							need for classes.
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
							<span>{`function MyComponent() {`}</span>

							<span className="relative left-9">
								{`  return(`}
							</span>
							<span className="relative left-14">
								{`  <div>`}
							</span>
							<span className="relative left-20">
								{`  <p>This is a function-based component.</p> `}
							</span>
							<span className="relative left-14">
								{`  </div>`}
							</span>
							<span className="relative left-9">{`  );`}</span>
							<span className="relative left-4">{` }`}</span>
						</Code>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Exporting a Component
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In order to reuse components in different pages , we
							have to make them separate and export it.Thus ,
							allowing us to import them from any file and use
							them.
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
							<span>{`function MyComponent() {`}</span>

							<span className="relative left-9">
								{`  return(`}
							</span>
							<span className="relative left-14">
								{`  <div>`}
							</span>
							<span className="relative left-20">
								{`  <p>This is a function-based component.</p> `}
							</span>
							<span className="relative left-14">
								{`  </div>`}
							</span>
							<span className="relative left-9">{`  );`}</span>
							<span className="relative left-4">{` }`}</span>
							<span className="bg-slate-700 p-1 rounded-lg">
								{" "}
								{`export default MyComponent;`}{" "}
							</span>
						</Code>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/props"
				prevLink="/notes/react/react-jsx"
			/>
		</div>
	);
}
