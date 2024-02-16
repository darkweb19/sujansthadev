import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import DocumentMdx from "./Document.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/getid"
				prevLink="/notes/js/window"
			/>

			<MainContent
				heading={"DOCUMENT OBJECT"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<DocumentMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/getid"
				prevLink="/notes/js/window"
			/>
		</div>
	);
}
