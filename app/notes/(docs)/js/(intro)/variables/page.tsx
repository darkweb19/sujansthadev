import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import VariablesMdx from "./Variables.mdx";
import SuccessNote from "@/components/Notes/SuccessNote";

export default function jsVariables() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/diffvar"
				prevdisabled
				prevLink="#"
			/>

			<MainContent
				heading={"VARIABLES"}
				contentHeading={"What are Variables?"}
				mainDefinition={
					"In JavaScript, variables are used to store data. They are an essential part of any programming language, as they allow you to store, retrieve, and manipulate data in your programs."
				}
				logo={<RiJavascriptFill />}
			>
				<VariablesMdx />
				<SuccessNote content="JavaScript is dynamically typed language ,so type checking takes place at runtime or execution time." />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/diffvar"
				prevdisabled
				prevLink="#"
			/>
		</div>
	);
}
