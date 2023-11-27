import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Js | JSX ",
		description: "Notes of React js including some snippets",
	};
}
export default function reactJSX() {
	return <div>About React JSx</div>;
}
