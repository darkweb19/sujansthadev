import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { RiJavascriptFill } from "react-icons/ri";
import HoistingMdx from "./Hoisting.mdx";

export default function DocumentWindow() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="#"
				prevLink="/notes/js/higher"
				nextdisabled
			/>

			<MainContent
				heading={"HOISTING "}
				contentHeading={""}
				logo={<RiJavascriptFill />}
			>
				<HoistingMdx />
			</MainContent>

			<TopNavButtons
				nextLink="#"
				prevLink="/notes/js/higher"
				nextdisabled
			/>
		</div>
	);
}
