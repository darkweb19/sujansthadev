import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import ParagraphTagMdx from "./ParagraphTag.mdx";

export default function ParagraphTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/image"
				prevLink="/notes/html/heading"
			/>

			<MainContent
				heading={"PARAGRAPH TAGS"}
				contentHeading={""}
				mainDefinition={
					"The paragraph tag in HTML is represented by <p> and is used to define paragraphs of text. It's one of the most commonly used tags for structuring text content on a webpage."
				}
			>
				<ParagraphTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/image"
				prevLink="/notes/html/heading"
			/>
		</div>
	);
}
