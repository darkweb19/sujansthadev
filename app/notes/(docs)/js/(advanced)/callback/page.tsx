import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import CallbackMdx from "./Callback.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/hoisting"
				prevLink="/notes/js/higher"
			/>

			<MainContent
				heading={"CALL-BACK FUNCTIONS"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<CallbackMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/hoisting"
				prevLink="/notes/js/higher"
			/>
		</div>
	);
}
