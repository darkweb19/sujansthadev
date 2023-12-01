import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import { Snippet } from "@nextui-org/snippet";
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
				nextLink="/notes/react/react-jsx"
				prevLink="/notes/react/"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						useState Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What is useState Hook ?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							useState in react helps to manage the states over
							the application.
						</p>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Importing useState
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							To use useState , we have to import it firsts :
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
						</Code>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Initilizing useStates
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							You can initialize state like this:
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
							<span className="relative left-7">{`const [cound, setCount] = useState(0)`}</span>
							<span>{`};`}</span>
						</Code>
						<p
							className={`${inter.className} flex gap-1 pl-6 text-lg mt-2 text-justify`}
						>
							useState takes initial state as argument and gives a
							state and a function(setCount in this case) to
							update that state as we can&apos;t directly
							change/update a state. Also, these state names are
							just like variables, hence you can name them
							anything you like.
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Reading useStates
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							We can read and display the value that are present
							in the states :
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
							<span className="relative left-7">{`const [cound, setCount] = useState(0)`}</span>
							<span className="relative left-11">{`return (`}</span>
							<span className="relative left-14">{`<div> `}</span>
							<span className="relative left-20">{`Hello , count value is {count}`}</span>
							<span className="relative left-14">{`</div> `}</span>
							<span className="relative left-11">{`);`}</span>
							<span>{`};`}</span>
							<span>{`export default App;`}</span>
						</Code>
						<p
							className={`${inter.className} flex gap-1 pl-6 text-lg mt-2 text-justify`}
						>
							As mentioned earlier, it returns a state and a
							function to change/update that state. Hence,
							everything is stored in name. We can read states
							just like variables:
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Updating a State
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							To update state we use the function it returns to
							update state, in this case: setCount. State can be
							updated like this:
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
							<span className="relative left-7">{`const [cound, setCount] = useState(0)`}</span>
							<span className="relative left-7">{`setCount(4);`}</span>
							<span className="relative left-11">{`return (`}</span>
							<span className="relative left-14">{`<div> `}</span>
							<span className="relative left-20">{`Hello , count value is {count}`}</span>
							<span className="relative left-14">{`</div> `}</span>
							<span className="relative left-11">{`);`}</span>
							<span>{`};`}</span>
							<span>{`export default App;`}</span>
						</Code>
						<p
							className={`${inter.className} flex gap-1 text-lg pl-6 mt-2 text-justify`}
						>
							Here , the new value of count will be set to 4.
							Initially , the value of count was 0 , by default.
						</p>

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							States Datatypes
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Like any other variables in js , state can hold any
							datatypes like string, integers, booleans, arrays,
							object in arrays, arrays in object etc.
						</p>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/react-jsx"
				prevLink="/notes/react/"
			/>
		</div>
	);
}
