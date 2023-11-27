import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Js | Introduction ",
		description: "Notes of React js including some snippets",
	};
}
export default function intoReact() {
	return <div>Introduction to react</div>;
}
