import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import { Snippet } from "@nextui-org/snippet";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";

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
						useContext Hook
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What are useContext hooks?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Open your terminal to create your application. Run
							this command to create a React application named
							my-react-app:
						</p>

						<Snippet
							className="bg-slate-black text-light-white mt-2 p-2 relative left-7"
							size="md"
						>
							npx create-react-app@latest my-react-app
						</Snippet>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Creating in current directory
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Open your terminal in the directory you would like
							to create your application. Run this command to
							create a React application:
						</p>
						<Snippet
							className="bg-slate-black text-light-white mt-2 p-2 relative left-7"
							size="md"
						>
							npx create-react-app@latest .
						</Snippet>
						<p
							className={`${inter.className}  text-lg p-2 mt-2 text-justify`}
						>
							In this case , every file will be placed in the
							current directory.
						</p>
						<SuccessNote content="When choosing folder name, make sure there are no spaces or capital letters because of npm naming restrictions." />
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Development Server
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Once base application is created, if folder
							specified you just have to enter the folder. You can
							use this command to enter:
						</p>
						<Snippet
							className="bg-slate-black text-light-white  p-2 relative left-7"
							size="md"
						>
							cd my-react-app
						</Snippet>
						<p
							className={`${inter.className} flex gap-1 text-lg mt-2 text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							Then just start up the application with this
							command:
						</p>
						<Snippet
							className="bg-slate-black text-light-white p-2 relative left-7"
							size="md"
						>
							npm start
						</Snippet>
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
