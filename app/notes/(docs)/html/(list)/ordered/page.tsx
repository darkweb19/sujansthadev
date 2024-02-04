import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import OrderedListMdx from "./OrderedLists.mdx";

export default function OrderedListTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/unordered"
				prevLink="/notes/html/list"
			/>

			<MainContent
				heading={"HTML ORDERED LIST "}
				contentHeading={""}
				mainDefinition={
					"An ordered list is a list of items that are arranged in a specific, sequential order. Each item in the list is usually numbered to indicate its position in the sequence. Ordered lists are commonly used when the sequence of the items is important, such as in step-by-step instructions or rankings."
				}
			>
				<OrderedListMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/unordered"
				prevLink="/notes/html/list"
			/>
		</div>
	);
}
