import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import OuterMdx from "./Outer.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/closures"
				prevLink="/notes/js/innerHTML"
			/>

			<MainContent
				heading={"OuterHTML"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<OuterMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/closures"
				prevLink="/notes/js/innerHTML"
			/>
		</div>
	);
}
