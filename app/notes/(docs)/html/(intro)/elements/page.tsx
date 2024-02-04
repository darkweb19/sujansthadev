import MainContent from "@/components/Notes/MainContent";
import ElementsMdx from "./Elements.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function Elements() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/classes"
				prevLink="/notes/html/attributes"
			/>

			<MainContent
				heading={"HTML ELEMENTS"}
				contentHeading={""}
				mainDefinition={
					"HTML (Hypertext Markup Language) elements are the building blocks of web pages. They are used to structure content on the web and provide meaning to different parts of a document. HTML elements are composed of tags, attributes, and content."
				}
			>
				<ElementsMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/classes"
				prevLink="/notes/html/attributes"
			/>
		</div>
	);
}
