import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import FunctionMdx from "./Function.mdx";

export default function jsFunctions() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/ternary"
				prevLink="/notes/js/while"
			/>

			<MainContent
				heading={"JAVASCRIPT FUNCTION"}
				contentHeading={""}
				mainDefinition={
					"A JavaScript function is a block of code designed to perform a particular task."
				}
				logo={<RiJavascriptFill />}
			>
				<FunctionMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/ternary"
				prevLink="/notes/js/while"
			/>
		</div>
	);
}
