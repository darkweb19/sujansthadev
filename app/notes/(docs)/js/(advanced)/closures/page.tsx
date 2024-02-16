import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ClosuresMdx from "./Closures.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/higher"
				prevLink="/notes/js/outerHTML"
			/>

			<MainContent
				heading={"CLOSURES"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<ClosuresMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/higher"
				prevLink="/notes/js/outerHTML"
			/>
		</div>
	);
}
