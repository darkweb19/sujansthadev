import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import GetidMdx from "./Getid.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/innerHTML"
				prevLink="/notes/js/document"
			/>

			<MainContent
				heading={"getElementbyId"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<GetidMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/innerHTML"
				prevLink="/notes/js/document"
			/>
		</div>
	);
}
