import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ConstructorMdx from "./Constructor.mdx";

export default function constructorOOP() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/inheritance"
				prevLink="/notes/js/object"
			/>

			<MainContent
				heading={"CONSTRUCTOR"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<ConstructorMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/inheritance"
				prevLink="/notes/js/object"
			/>
		</div>
	);
}
