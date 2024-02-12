import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import PolymorphismMdx from "./Polymorphism.mdx";

export default function oopPolymorphism() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/window"
				prevLink="/notes/js/inheritance"
			/>

			<MainContent
				heading={"POLYMORPHISM"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<PolymorphismMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/window"
				prevLink="/notes/js/inheritance"
			/>
		</div>
	);
}
