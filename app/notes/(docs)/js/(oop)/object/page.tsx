import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ObjectMdx from "./Object.mdx";

export default function objectOOP() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/constructor"
				prevLink="/notes/js/class"
			/>

			<MainContent
				heading={"OBJECT"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<ObjectMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/constructor"
				prevLink="/notes/js/class"
			/>
		</div>
	);
}
