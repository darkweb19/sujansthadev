import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "How to Set Up React | React JS",
		description: "Notes of React js including some snippets",
	};
}
export default function SetUp() {
	return <div>This is setup for react</div>;
}
