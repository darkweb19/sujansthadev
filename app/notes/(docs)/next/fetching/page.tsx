import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import DataFetchingAll from "./DataFetchingAll";

export default function Fetching() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
			<MainContent
				heading={"Data Fetching"}
				contentHeading={""}
				mainDefinition={
					"Data fetching is a core part of any application. This page goes through how you can fetch, cache, and revalidate data in React and Next.js."
				}
			>
				<DataFetchingAll />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/react/useRef"
				prevLink="/notes/react/useState"
			/>
		</div>
	);
}
