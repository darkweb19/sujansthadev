import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import InheritanceMdx from "./Inheritance.mdx";

export default function oopInheritance() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/polymorphism"
				prevLink="/notes/js/constructor"
			/>

			<MainContent
				heading={"INHERITANCE"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<InheritanceMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/polymorphism"
				prevLink="/notes/js/constructor"
			/>
		</div>
	);
}
