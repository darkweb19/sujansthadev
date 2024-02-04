import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import CodeTagMdx from "./CodeTag.mdx";

export default function CodeTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/entities"
				prevLink="/notes/html/others"
			/>

			<MainContent
				heading={"HTML CODE TAGS "}
				contentHeading={""}
				mainDefinition={
					"The HTML <code> tag is a powerful element for displaying code snippets within a webpage. It preserves both spaces and line breaks, making it ideal for showcasing code. In this blog post, we'll explore how to use the <code> tag effectively, especially in conjunction with Prism for code highlighting."
				}
			>
				<CodeTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/entities"
				prevLink="/notes/html/others"
			/>
		</div>
	);
}
