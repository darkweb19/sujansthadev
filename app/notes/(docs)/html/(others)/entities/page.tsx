import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import EntitiesTagMdx from "./EntitiesTag.mdx";

export default function Entities() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/quotation"
				prevLink="/notes/html/code"
			/>

			<MainContent
				heading={"HTML Entities "}
				contentHeading={""}
				mainDefinition={
					"HTML entities are a crucial part of HTML markup language. They enable you to display characters that are reserved in HTML or that aren't readily available on the keyboard. In this blog, we'll explore what HTML entities are, their types, and how to use them."
				}
			>
				<EntitiesTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/quotation"
				prevLink="/notes/html/code"
			/>
		</div>
	);
}
