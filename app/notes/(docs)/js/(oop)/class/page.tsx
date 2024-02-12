import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import ClassesMdx from "./Classes.mdx";

export default function OOPClasses() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/object"
				prevLink="/notes/js/string"
			/>

			<MainContent
				heading={"Object Oriented Programming"}
				contentHeading={"What are OOPs?"}
				mainDefinition={
					"Object-oriented programming (OOP) is a programming paradigm that focuses on using objects and classes  to design and build programs."
				}
				logo={<RiJavascriptFill />}
			>
				<ClassesMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/object"
				prevLink="/notes/js/string"
			/>
		</div>
	);
}
