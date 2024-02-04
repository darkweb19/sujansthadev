import MainContent from "@/components/Notes/MainContent";
import BasicTagsMdx from "./BasicTags.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function BasicTags() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/heading"
				prevLink="/notes/html/classes"
			/>
			<MainContent
				heading={"HTML BASIC TAGS"}
				contentHeading={""}
				mainDefinition={
					"HTML has a variety of basic tags that are fundamental to structuring content on a webpage. Here are some of the most commonly used basic HTML tags:"
				}
			>
				<BasicTagsMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/heading"
				prevLink="/notes/html/classes"
			/>
		</div>
	);
}
