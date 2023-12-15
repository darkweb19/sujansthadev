import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Next Js Notes ",
		description: "Notes of Next js including some snippets",
	};
}

export default function NextPage() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
			<MainContent
				heading={"NEXT JS"}
				contentHeading={"What is Next JS?"}
				mainDefinition={
					"Next Js is an open-source react framework for web. It's designed to build react application with server-side rendering and other advanced feature."
				}
			>
				<h1></h1>
			</MainContent>

			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
		</div>
	);
}
