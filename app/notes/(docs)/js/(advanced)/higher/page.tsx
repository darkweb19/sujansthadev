import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import HigherMdx from "./Higher.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/callback"
				prevLink="/notes/js/closures"
			/>

			<MainContent
				heading={"HIGHER ORDER FUNCTIONS"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<HigherMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/callback"
				prevLink="/notes/js/closures"
			/>
		</div>
	);
}
