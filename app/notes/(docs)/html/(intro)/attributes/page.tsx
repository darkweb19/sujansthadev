import MainContent from "@/components/Notes/MainContent";
import AttributesMdx from "./attributes.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function Attributes() {
	return (
		<div>
			<TopNavButtons
				nextLink="/notes/html/elements"
				prevLink="/notes/html"
			/>
			<MainContent
				heading={"Attributes"}
				contentHeading={""}
				mainDefinition={
					"HTML attributes provide additional information about HTML elements."
				}
			>
				<AttributesMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/elements"
				prevLink="/notes/html"
			/>
		</div>
	);
}
