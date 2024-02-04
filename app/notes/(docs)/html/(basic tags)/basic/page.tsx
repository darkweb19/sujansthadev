import MainContent from "@/components/Notes/MainContent";
import BasicTagsMdx from "./BasicTags.mdx";

export default function BasicTags() {
	return (
		<div className="flex flex-col gap-1">
			<MainContent
				heading={"HTML BASIC TAGS"}
				contentHeading={""}
				mainDefinition={
					"HTML has a variety of basic tags that are fundamental to structuring content on a webpage. Here are some of the most commonly used basic HTML tags:"
				}
			>
				<BasicTagsMdx />
			</MainContent>
		</div>
	);
}
