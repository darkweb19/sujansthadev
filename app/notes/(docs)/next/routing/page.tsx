import CodePreview from "@/components/Notes/CodePreview";
import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { Code } from "@nextui-org/react";
import Link from "next/link";
import { dynamicLinkCode, linkCode, usePathnameCode } from "./Code";
import { Metadata } from "next/types";
import { inter, ubuntu } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Routing : Defining Routes",
		description:
			"How to define and organize routes in your Next.js application.",
	};
}

export default function Routing() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
			<MainContent
				heading={"Routing"}
				contentHeading={"Linking and Navigation"}
				mainDefinition={
					"There are two types to navigate through routes in Next JS"
				}
			>
				<div className={`${inter.className}`}>
					<ul className="px-4 mt-2 flex flex-col gap-1">
						<li className="flex gap-3">
							<span>-</span>
							Using the
							<Link href={"#link"} className="text-blue-500">
								Link
							</Link>
							Component
						</li>
						<li className="flex gap-3">
							<span>-</span>
							Using{" "}
							<Code className="text-white bg-slate-black">
								useRouter
							</Code>{" "}
							Hook
						</li>
					</ul>
				</div>
				<div className="p-2">
					<h1
						id="link"
						className={`${ubuntu.className} text-3xl mt-4 dark:text-slate-200 light:text-gray-700`}
					>
						<Link href={"#link"}>{`<Link>`} component</Link>
					</h1>
					<p
						className={`${inter.className} text-justify mt-3 sm:px-2`}
					>
						<Code className="font-semibold">{`<Link>`}</Code> is the
						extended version of HTML {`<a>`} tag that provides
						client side navigations between routes. It&apos;s
						primary way to navigate between routes in Next JS.
					</p>
					<p className={`${inter.className} text-justify mt-2 px-1`}>
						You can use it by importing it from{" "}
						<Code className="font-semibold">next/link</Code>, and
						passing a <Code className="font-semibold">href</Code>{" "}
						prop to the component.
					</p>
					<CodePreview lines={[4]} code={linkCode} />
					<h2
						id="link"
						className={`${ubuntu.className} text-2xl mt-4 dark:text-slate-200 light:text-gray-700`}
					>
						Examples
					</h2>
					<p className={`${inter.className} text-justify mt-2 px-1`}>
						When linking to dynamic segments, you can use template
						literals and interpolation to generate a list of links.
						For example, to generate a list of blog posts:
					</p>
					<CodePreview lines={[8]} code={dynamicLinkCode} />
					<h2
						id="link"
						className={`${ubuntu.className} text-2xl mt-4 dark:text-slate-200 light:text-gray-700`}
					>
						Checking Active Links
					</h2>
					<p className={`${inter.className} text-justify my-2 px-1`}>
						You can use{" "}
						<Code className="font-semibold">usePathname()</Code> to
						determine if a link is active. For example, to add a
						class to the active link, you can check if the current
						pathname matches the href of the link:
					</p>
					<CodePreview lines={[13, 19]} code={usePathnameCode} />
				</div>
			</MainContent>

			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
		</div>
	);
}
