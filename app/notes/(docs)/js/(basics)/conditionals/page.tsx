import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ConditionalsMdx from "./Conditionals.mdx";

export default function jsConditionals() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/for"
				prevLink="/notes/js/diffvar"
			/>

			<MainContent
				heading={"CONDITIONALS"}
				contentHeading={"If else conditionals"}
				mainDefinition={`Conditionals are the expressions to evaluate either true or false , based on which it performs a specific task. `}
				logo={<RiJavascriptFill />}
			>
				<ConditionalsMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/for"
				prevLink="/notes/js/diffvar"
			/>
		</div>
	);
}
