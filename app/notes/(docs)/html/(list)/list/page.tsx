import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import ListTagMdx from "./ListTag.mdx";

export default function ListTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/ordered"
				prevLink="/notes/html/semantic"
			/>

			<MainContent
				heading={"HTML LIST "}
				contentHeading={""}
				mainDefinition={
					"Our day-to-day lives often involve the use of lists. For example, when we go shopping, the bill we receive includes a list of all the items we've purchased. In a similar manner, web developers use lists to neatly display data on websites."
				}
			>
				<ListTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/ordered"
				prevLink="/notes/html/semantic"
			/>
		</div>
	);
}
