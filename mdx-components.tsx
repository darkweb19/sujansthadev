import type { MDXComponents } from "mdx/types";
import { inter, lilitaFont, ubuntu } from "./app/notes/layout";
import { FaCircle } from "react-icons/fa";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: (props) => (
			<h1
				className={`${lilitaFont.className} mt-5 text-4xl text-gray-700`}
			>
				{props.children}
			</h1>
		),
		h2: (props) => (
			<h2
				className={`${ubuntu.className} mt-5 text-3xl font-medium text-slate-black`}
			>
				{props.children}
			</h2>
		),
		h3: (props) => (
			<h3 className={`${inter.className} mt-5 text-2xl font-medium`}>
				{props.children}
			</h3>
		),
		p: (props) => (
			<p className={`${inter.className} mt-1 px-2 text-lg text-justify `}>
				{props.children}
			</p>
		),
		ul: (props) => (
			<ul className={`${inter.className} px-2  sm:px-4 mt-2`}>
				{props.children}
			</ul>
		),
		li: (props) => (
			<li className="flex items-center gap-2">
				<span className="text-xs">
					<FaCircle />{" "}
				</span>{" "}
				{"  "} {props.children}
			</li>
		),
		...components,
	};
}