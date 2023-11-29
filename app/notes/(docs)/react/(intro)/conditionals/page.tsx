import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { FaCircle } from "react-icons/fa";
import { Code } from "@nextui-org/code";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Conditionals in React | React JS",
		description: "What are conditionals in react.",
	};
}

export default function ConditionalPage() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				prevLink="/notes/react/react-jsx"
				nextLink="/notes/react/props/lists"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React Conditionals
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							Conditionals in React
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In React.js, conditional rendering is a common
							practice where you render different content or
							components based on certain conditions. This is
							achieved using JavaScript&apos;s conditional
							statements and expressions.
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Ways to implement conditionals
						</h1>
						<p
							className={`${inter.className}text-xl font-medium flex items-center gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Using IF statements
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
							<span>
								{`const MyComponent = ({ condition }) => {`}
							</span>
							<span className="relative left-4">
								{`  if (condition) {`}
							</span>
							<span className="relative left-9">
								{`   return <p>This is true!</p>;`}
							</span>
							<span className="relative left-14">
								{`    } else {`}
							</span>
							<span className="relative left-20">
								{`    return <p>This is false!</p>; `}
							</span>
							<span className="relative left-14">{`    }`}</span>
							<span className="relative left-9">{`  }`}</span>
							<span className="relative left-4">{` };`}</span>
							<span>{`export default MyComponent;`}</span>
						</Code>
						<p
							className={`${inter.className} flex items-center mt-3 md:mt-3 gap-1 px-5 text-xl font-medium text-justify`}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Using Ternary Operator
						</p>
						<div className="flex items-center justify-start relative left-9 ">
							<span className="text-lg  ml-2 font-medium">
								Syntax :
							</span>
							<Code
								className="bg-slate-black text-light-white p-2 relative left-3"
								size="md"
							>
								condition ? True : False
							</Code>
						</div>
						<Code
							className="bg-slate-black text-light-white p-3 mt-3 flex flex-col relative left-7"
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
							<span>
								{`const MyComponent = ({ condition }) => {`}
							</span>
							<span className="relative left-4">
								{`  return (  `}
							</span>
							<span className="relative left-9">
								{`    <div>;`}
							</span>
							<span className="relative left-14">
								{` {condition ? <p>This is true!</p> : <p>This is false!</p>}`}
							</span>
							<span className="relative left-9">
								{`    </div>`}
							</span>
							<span className="relative left-4">{`  );`}</span>
							<span className="relative">{`  };`}</span>

							<span>{`export default MyComponent;`}</span>
						</Code>
						<p
							className={`${inter.className} flex items-center text-xl font-medium gap-1 py-1 px-5  text-justify`}
						>
							<span className="border py-1 h-fit text-sm">
								<FaCircle />
							</span>
							Using Logical && Operators
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
							<span>
								{`const MyComponent = ({ condition }) => {`}
							</span>
							<span className="relative left-4">
								{`  return (  `}
							</span>
							<span className="relative left-9">
								{`    <div>;`}
							</span>
							<span className="relative left-14">
								{`{condition && <p>This is true!</p>}`}
							</span>
							<span className="relative left-9">
								{`    </div>`}
							</span>
							<span className="relative left-4">{`  );`}</span>
							<span className="relative">{`  };`}</span>

							<span>{`export default MyComponent;`}</span>
						</Code>

						<SuccessNote content="Choose the method that fits your specific use case and coding style. Conditional rendering is a powerful feature in React that allows you to create dynamic and responsive user interfaces." />
					</div>
				</div>
			</div>
			<TopNavButtons
				prevLink="/notes/react/react-jsx"
				nextLink="/notes/react/props/lists"
			/>
		</div>
	);
}
