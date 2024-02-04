import MainContent from "@/components/Notes/MainContent";
import ImageTagMdx from "./ImageTag.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function ImageTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/anchor"
				prevLink="/notes/html/paragraph"
			/>

			<MainContent
				heading={"IMAGE TAGS"}
				contentHeading={""}
				mainDefinition={
					"The image tag in HTML is represented by <img> and is used to embed images into a webpage."
				}
			>
				<ImageTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/anchor"
				prevLink="/notes/html/paragraph"
			/>
		</div>
	);
}
