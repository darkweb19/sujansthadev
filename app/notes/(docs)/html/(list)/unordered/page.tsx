import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import UnOrderedListMdx from "./OrderedList.mdx";

export default function UnOrderedListTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/others"
				prevLink="/notes/html/ordered"
			/>

			<MainContent
				heading={"HTML UNORDERED LIST "}
				contentHeading={""}
				mainDefinition={
					"An unordered list is a list of items that are not arranged in any specific, sequential order. Unlike ordered lists, the items in an unordered list are typically marked with bullet points, dashes, or other symbols to indicate list membership, but these markers do not imply any particular order."
				}
			>
				<UnOrderedListMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/unordered"
				prevLink="/notes/html/list"
			/>
		</div>
	);
}
