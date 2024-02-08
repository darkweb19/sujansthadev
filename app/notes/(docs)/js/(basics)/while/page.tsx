import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import WhileLoopMdx from "./WhileLoop.mdx";
import WarningNote from "@/components/Notes/WarninNote";

export default function jsWhileLoop() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/function"
				prevLink="/notes/js/for"
			/>

			<MainContent
				heading={"WHILE LOOPS"}
				contentHeading={""}
				mainDefinition={
					"While loops are a control flow structure in programming that allow you to repeat a block of code while a certain condition is true."
				}
				logo={<RiJavascriptFill />}
			>
				<WhileLoopMdx />
				<WarningNote content="While loops can be a useful tool in JavaScript, but it's important to use them with caution. If the condition is never met, the loop will become an infinite loop and will run forever. Make sure to include a way to update the condition and eventually exit the loop to avoid this issue." />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/function"
				prevLink="/notes/js/for"
			/>
		</div>
	);
}
