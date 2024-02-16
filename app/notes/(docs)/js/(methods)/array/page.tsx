import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ArrayMethodsMdx from "./ArrayMethods.mdx";

export default function arrayMethods() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/string"
				prevLink="/notes/js/ternary"
			/>

			<MainContent
				heading={"ARRAY METHODS"}
				contentHeading={"What are Arrays?"}
				mainDefinition={
					"An array is a special variable, which can hold more than one value. An array can hold many values under a single name, and you can access the values by referring to an index number."
				}
				logo={<RiJavascriptFill />}
			>
				<ArrayMethodsMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/string"
				prevLink="/notes/js/ternary"
			/>
		</div>
	);
}
