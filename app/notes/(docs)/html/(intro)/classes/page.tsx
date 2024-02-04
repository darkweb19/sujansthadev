import MainContent from "@/components/Notes/MainContent";
import IdandClassesMdx from "./IdandClasses.mdx";
import TopNavButtons from "@/components/Notes/TopNavButtons";

export default function ClassesId() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/html/basic"
				prevLink="/notes/html/elements"
			/>

			<MainContent
				heading={"HTML Id & Classes"}
				contentHeading={""}
				mainDefinition={
					"In HTML, id and class are attributes used to apply specific styles or target elements for manipulation through CSS (Cascading Style Sheets) or JavaScript"
				}
			>
				<IdandClassesMdx />
			</MainContent>
			<TopNavButtons
				nextLink="/notes/html/basic"
				prevLink="/notes/html/elements"
			/>
		</div>
	);
}
