import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import type { Metadata } from "next";
import { inter, ubuntu } from "../../layout";
import { FaCircle, FaHtml5 } from "react-icons/fa";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "HTML Notes ",
		description: "Notes of HTML5 and tags including some code snippets.",
	};
}

export default function HtmlPage() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/setup"
				prevdisabled
				prevLink="#"
			/>

			<MainContent
				heading={"HTML"}
				contentHeading={"What is HTML?"}
				mainDefinition={
					"HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. It's a set of instructions that tells a web browser how to display text, images, videos, and other elements on a webpage. Think of it as the building blocks that create the structure and look of a website, similar to how bricks and mortar are used to build a house."
				}
				logo={<FaHtml5 />}
			>
				<div>
					<div className="p-1">
						<h1
							className={`${ubuntu.className} mt-5 text-3xl font-medium text-slate-black`}
						>
							Main Features
						</h1>
						<p
							className={`${inter.className} flex mt-2 items-center px-2 gap-1 text-lg text-justify `}
						>
							<span className="border  h-fit text-xs">
								<FaCircle />
							</span>
							It is platform-independent.
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border h-fit text-xs">
								<FaCircle />
							</span>
							Images, videos, and audio can be added to a web page{" "}
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border h-fit text-xs">
								<FaCircle />
							</span>
							HTML is a markup language and not a programming
							language.
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							It can be integrated with other languages like CSS,
							JavaScript, etc.
						</p>
					</div>
					<h1
						className={`${ubuntu.className} text-3xl mt-4 font-medium text-slate-black`}
					>
						Learn HTML
					</h1>
					<p className={`${inter.className} p-2 text-justify `}>
						You can learn html from{"   "}
						<a
							href="https://www.codecademy.com/learn/learn-html"
							target="_blank"
							className="text-blue-500"
						>
							here
						</a>
						.
					</p>
				</div>
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/setup"
				prevdisabled
				prevLink="#"
			/>
		</div>
	);
}
