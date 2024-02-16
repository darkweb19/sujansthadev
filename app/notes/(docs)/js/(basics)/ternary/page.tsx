import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import TernaryMdx from "./Ternary.mdx";

export default function jsTernary() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/js/ternary"
				prevLink="/notes/js/while"
			/>

			<MainContent
				heading={"CONDITIONAL TERNARY OPERATOR"}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<TernaryMdx />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/js/ternary"
				prevLink="/notes/js/while"
			/>
		</div>
	);
}
