import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Next Js Notes ",
		description: "Notes of Next js including some snippets",
	};
}
export default function NextPage() {
	return <div>Hello From Next Page</div>;
}
