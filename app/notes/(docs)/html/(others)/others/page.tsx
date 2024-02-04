import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import OthersMdx from "./Other.mdx";

export default function OtherTag() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/code"
				prevLink="/notes/html/unordered"
			/>

			<MainContent
				heading={"OTHER HTML TAGS "}
				contentHeading={""}
				mainDefinition={
					"Certainly! Here are some other commonly used HTML tags that serve various purposes in web development:"
				}
			>
				<OthersMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/code"
				prevLink="/notes/html/unordered"
			/>
		</div>
	);
}
