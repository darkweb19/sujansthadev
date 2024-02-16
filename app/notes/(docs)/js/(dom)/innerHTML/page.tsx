import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import InnerMdx from "./InnerHTML.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/outerHTML"
				prevLink="/notes/js/getid"
			/>

			<MainContent
				heading={"InnerHTML"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<InnerMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/outerHTML"
				prevLink="/notes/js/getid"
			/>
		</div>
	);
}
