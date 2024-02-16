import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import DOMWIndowMdx from "./Window.mdx";

export default function DomWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/document"
				prevLink="/notes/js/polymorphism"
			/>

			<MainContent
				heading={"WINDOW OBJECT"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<DOMWIndowMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/document"
				prevLink="/notes/js/polymorphism"
			/>
		</div>
	);
}
