import { ubuntu, inter } from "@/app/fonts";
import CodePreview from "@/components/Notes/CodePreview";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import WarningNote from "@/components/Notes/WarninNote";
import type { Metadata } from "next";
import Link from "next/link";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import { attackCode, elementCode, expressionCode } from "./code";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Js | JSX ",
		description: "Notes of React js including some snippets",
	};
}
export default function ReactJSX() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/components"
				prevLink="/notes/react/setup"
			/>
			<div className="border w-full">
				<div className="p-2">
					<h1
						className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
					>
						What is JSX?
					</h1>
					<p
						className={`${inter.className} flex gap-1 text-lg text-justify`}
					>
						<span className="border py-1 h-fit text-xl">
							<IoIosArrowDroprightCircle />
						</span>
						JSX stands for JavaScript XML. It is similar in
						appearance to HTML, hence provides a way to easily write
						HTML in react.
					</p>
					<p
						className={`${inter.className} flex gap-1 pl-7 text-lg text-justify`}
					>
						React doesn&apos;t require using JSX, but most people
						find it helpful as a visual aid when working with UI
						inside the JavaScript code. It also allows React to show
						more useful error and warning messages.
					</p>
					<CodePreview code={`${elementCode}`} />
					<h1
						className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
					>
						Embedding Expressions in JSX
					</h1>
					<p
						className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
					>
						<span className="border py-1 h-fit text-xl">
							<IoIosArrowDroprightCircle />
						</span>
						In the example below, we declare a variable called name
						and then use it inside JSX by wrapping it in curly
						braces:
					</p>
					<CodePreview code={`${expressionCode}`} />

					<p
						className={`${inter.className}  text-lg p-2 mt-2 text-justify`}
					>
						Try on{" "}
						<Link
							className="text-blue-400 underline"
							target="_blank"
							href="https://codepen.io/gaearon/pen/PGEjdG?editors=1010"
						>
							codepen
						</Link>
					</p>

					<WarningNote content="Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For example, class becomes className in JSX, and tabindex becomes tabIndex." />
					<h1
						className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
					>
						JSX Prevents Injection Attacks
					</h1>
					<p
						className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
					>
						<span className="border py-1 h-fit text-xl">
							<IoIosArrowDroprightCircle />
						</span>
						It is safe to embed user input in JSX:
					</p>
					<p
						className={`${inter.className} flex gap-1 text-lg text-justify`}
					>
						<span className="border py-1 h-fit text-xl">
							<IoIosArrowDroprightCircle />
						</span>
						By default, React DOM escapes any values embedded in JSX
						before rendering them. Thus it ensures that you can
						never inject anything that&apos;s not explicitly written
						in your application. Everything is converted to a string
						before being rendered. This helps prevent XSS
						(cross-site-scripting) attacks.
					</p>
					<CodePreview code={`${attackCode}`} />

					<p
						className={`${inter.className} flex gap-1 text-lg mt-2 text-justify`}
					>
						<span className="border py-1 h-fit text-xl">
							<IoIosArrowDroprightCircle />
						</span>
						Then just start up the application with this command:
					</p>
					<WarningNote content="We recommend using the “Babel” language definition for your editor of choice so that both ES6 and JSX code is properly highlighted." />
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/components"
				prevLink="/notes/react/setup"
			/>
		</div>
	);
}
