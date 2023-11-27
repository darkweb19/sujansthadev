import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Notes ",
		description: "Notes of React js including some snippets",
	};
}

export default function ReactPage() {
	return <div>Hello From React Page</div>;
}