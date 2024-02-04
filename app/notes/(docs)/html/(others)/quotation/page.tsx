import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import QuotationTagMdx from "./QuotationTag.mdx";

export default function QuotationTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/entities"
				prevLink="/notes/html/others"
			/>

			<MainContent
				heading={"HTML QUOTATION TAGS "}
				contentHeading={""}
				mainDefinition={
					"The use of quotations is common in textual content. HTML provides specific tags to handle this: <blockquote> for block quotations and <q> for inline quotations. In this blog, we'll explore these tags, their attributes, and how to style them."
				}
			>
				<QuotationTagMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/html/entities"
				prevLink="/notes/html/others"
			/>
		</div>
	);
}
