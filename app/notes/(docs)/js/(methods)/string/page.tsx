import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import StringMethodsMdx from "./StringMethods.mdx";

export default function stringMethods() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/class"
				prevLink="/notes/js/array"
			/>

			<MainContent
				heading={"STRING METHODS"}
				contentHeading={"What are STRINGS?"}
				mainDefinition={
					"Strings are for storing text .Strings are written with quotes. A string in JavaScript is a sequence of characters enclosed in either single or double quotes."
				}
				logo={<RiJavascriptFill />}
			>
				<StringMethodsMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/class"
				prevLink="/notes/js/array"
			/>
		</div>
	);
}
