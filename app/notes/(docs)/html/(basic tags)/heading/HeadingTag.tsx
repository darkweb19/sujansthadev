import MainContent from "@/components/Notes/MainContent";
import HeadingTagMdx from "./HeadingTag.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function HeadingTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/heading"
				prevLink="/notes/html/classes"
			/>
			<MainContent
				heading={"HEADING TAGS"}
				contentHeading={""}
				mainDefinition={
					"Heading tags in HTML are used to define headings or titles within a document. There are six levels of heading tags, ranging from `<h1> `to`<h6>`, with `<h1>` being the highest level (most important) and `<h6>` being the lowest level."
				}
			>
				<HeadingTagMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/heading"
				prevLink="/notes/html/classes"
			/>
			``
		</div>
	);
}
