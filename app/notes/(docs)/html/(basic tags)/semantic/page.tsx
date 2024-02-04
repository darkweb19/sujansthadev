import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import SemanticTagMdx from "./SemanticTag.mdx";

export default function SemanticTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/list"
				prevLink="/notes/html/pre"
			/>

			<MainContent
				heading={"SEMANTIC TAGS"}
				contentHeading={""}
				mainDefinition={
					"HTML5 introduced a range of semantic tags that provide meaning to the structure of web content. This blog will guide you through the importance and usage of these tags."
				}
			>
				<SemanticTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/list"
				prevLink="/notes/html/pre"
			/>
		</div>
	);
}
