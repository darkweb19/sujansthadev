import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import PreTagMdx from "./PreTag.mdx";

export default function PreTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/semantic"
				prevLink="/notes/html/anchor"
			/>

			<MainContent
				heading={"PRE TAGS"}
				contentHeading={""}
				mainDefinition={
					"The <pre> tag serves as an indispensable tool in HTML for displaying preformatted text, such as code snippets in various programming languages."
				}
			>
				<PreTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/semantic"
				prevLink="/notes/html/anchor"
			/>
		</div>
	);
}
