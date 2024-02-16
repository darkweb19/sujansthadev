import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ForLoopMdx from "./ForLoop.mdx";

export default function jsForLoop() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/while"
				prevLink="/notes/js/conditionals"
			/>

			<MainContent
				heading={"LOOPS"}
				contentHeading={"Loops in Js"}
				mainDefinition={
					"Loops are used to repeatedly execute a block of code until a certain condition is met."
				}
				logo={<RiJavascriptFill />}
			>
				<ForLoopMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/while"
				prevLink="/notes/js/conditionals"
			/>
		</div>
	);
}
