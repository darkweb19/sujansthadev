import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { Code } from "@nextui-org/react";
import { FaCircle } from "react-icons/fa";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "How to Set Up React | React JS",
		description: "Notes of React js including some snippets",
	};
}

export default function SetUp() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex pl-4 sm:pl-1  flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useEffect Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useEffect Hook?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							The Effect Hook lets you perform side effects in
							function components:
						</p>
						<p
							className={`${inter.className} pl-7  text-lg text-justify`}
						>
							Data fetching, setting up a subscription, and
							manually changing the DOM in React components are
							all examples of side effects. Whether or not
							you&apos;re used to calling these operations “side
							effects” {`(or just “effects”)`}, you&apos;ve likely
							performed them in your components before.
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
							<span>{`import {useState} from 'react';`} </span>
							<span>{`const App = () => {`} </span>
							<span className="relative left-7">{`const [count, setCount] = useState(0)`}</span>
							<span className="relative left-7">{`useEffect(() => {`}</span>
							<span className="relative left-11">{` setTimeout(() => {`}</span>
							<span className="relative left-16">{`   setCount((count) => count + 1);`}</span>
							<span className="relative left-11">{`      }, 1000);`}</span>
							<span className="relative left-7">{`  });`}</span>
							<span className="relative left-11">{`return (`}</span>
							<span className="relative left-14">{`<div> `}</span>
							<span className="relative left-20">{`Hello , count value is {count}`}</span>
							<span className="relative left-14">{`</div> `}</span>
							<span className="relative left-11">{`);`}</span>
							<span>{`};`}</span>
							<span>{`export default App;`}</span>
						</Code>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
		</div>
	);
}
