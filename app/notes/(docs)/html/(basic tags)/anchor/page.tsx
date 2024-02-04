import MainContent from "@/components/Notes/MainContent";
import AnchortagMdx from "./anchor.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function AnchorTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/pre"
				prevLink="/notes/html/image"
			/>

			<MainContent
				heading={"AnchorTag"}
				contentHeading={""}
				mainDefinition={
					"Links are fundamental to navigating the web. In HTML, links are created using the <a> tag, also known as the Anchor tag."
				}
			>
				<AnchortagMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/pre"
				prevLink="/notes/html/image"
			/>
		</div>
	);
}
