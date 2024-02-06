import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import type { Metadata } from "next";
import JavascriptMdx from "./Javascript.mdx";
import { RiJavascriptFill } from "react-icons/ri";

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
				nextLink="/notes/js/setup"
				prevdisabled
				prevLink="#"
			/>

			<MainContent
				heading={"JAVASCRIPT"}
				contentHeading={"What is JavaScript?"}
				mainDefinition={
					"JavaScript is a popular programming language used in web development. It is a client-side scripting language, which means that it is executed by the user's web browser rather than on the server. JavaScript is used to create interactive and dynamic web pages, and is an essential tool for creating modern websites."
				}
				logo={<RiJavascriptFill />}
			>
				<JavascriptMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/next/setup"
				prevdisabled
				prevLink="#"
			/>
		</div>
	);
}
