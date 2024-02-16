import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import DiffVarMdx from "./DiffVar.mdx";

export default function jsDiffVar() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/conditionals"
				prevLink="/notes/js/variables"
			/>

			<MainContent
				heading={"JAVASCRIPT"}
				contentHeading={"Var vs Let vs Const"}
				mainDefinition={
					"In JavaScript, there are three ways to declare variables: var, let, and const. Each of these keywords has its own rules and uses, and it is important to understand the differences between them in order to write effective and maintainable code."
				}
				logo={<RiJavascriptFill />}
			>
				<DiffVarMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/conditionals"
				prevLink="/notes/js/variables"
			/>
		</div>
	);
}
