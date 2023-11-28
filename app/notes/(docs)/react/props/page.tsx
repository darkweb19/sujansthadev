import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu } from "@/app/notes/layout";
import { Snippet } from "@nextui-org/snippet";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { Code } from "@nextui-org/code";
import WarningNote from "@/components/Notes/WarninNote";
import { FaCircle } from "react-icons/fa";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Props in React | React",
		description: "What is props in react and components",
	};
}

export default function ReactProps() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/components"
				prevLink="/notes/react/react-jsx"
			/>
			<div className="w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-gray-700`}
					>
						React Setup
					</h1>
					<div className="border p-3 w-11/12 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							React Props
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							In React, "props" is short for "properties," and it
							refers to a mechanism for passing data from one
							component to another. Props are a way to send
							information from a parent component to a child
							component.
						</p>

						<Code
							className="bg-slate-black text-light-white mt-2 p-2 flex flex-col relative left-7"
							size="md"
						>
							<span>function Welcome(props) &#123;</span>
							<span>
								return &lt;h1&gt; Hello, &#123;props.name&#125;!
								&lt;/h1&gt;;
							</span>
						</Code>
						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Inside Component
						</h1>

						<Code
							className="bg-slate-black text-light-white mt-2 p-2 relative left-7"
							size="md"
						>
							<span>
								&lt;Welcome name=&#34;Sujan&#34; &#47;&gt;
							</span>
						</Code>
						<WarningNote content="Always start component names with a capital letter." />

						<h1
							className={`${ubuntu.className} text-2xl font-semibold text-slate-black mt-4`}
						>
							Internal React Flow
						</h1>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-sm">
								<FaCircle />
							</span>
							React calls the {`Welcome`} component with
							&#123;name: &#34;Sujan&#34; &#125; as the props
						</p>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-sm">
								<FaCircle />
							</span>
							Our Welcome component returns a{" "}
							{`<h1>Hello, Sujan!</h1>`}
							element as the result
						</p>
						<p
							className={`${inter.className} flex gap-1 mt-2 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-sm">
								<FaCircle />
							</span>
							React DOM efficiently updates the DOM to match
							{`<h1>Hello, Sujan</h1>!`}.
						</p>
					</div>
				</div>
			</div>

			<TopNavButtons
				nextLink="/notes/react/components"
				prevLink="/notes/react/react-jsx"
			/>
		</div>
	);
}
