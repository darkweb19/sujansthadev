import MainContent from "@/components/Notes/MainContent";
import SuccessNote from "@/components/Notes/SuccessNote";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import { Snippet } from "@nextui-org/snippet";
import DevelopmentList from "./DevelopmentServer";
import ScriptList from "./ScriptList";
import InstallationPrompt from "./InstallationPrompt";
import { Metadata } from "next";
import { ubuntu } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Setting Up Next Js.",
		description:
			"This Page shows how to set up Nextjs Project Locally using npm (Node Package Manager).",
	};
}

export default function nextSetup() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/next/structure"
				prevLink="/notes/next/"
			/>
			<MainContent
				heading={"Nextjs Installation"}
				contentHeading={"Installation"}
				mainDefinition={
					"To install Next.js, you'll first need to have Node.js and npm (Node Package Manager) installed on your machine. "
				}
			>
				<div className="p-0 sm:p-1 border h-fit">
					<h1
						className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
					>
						Create a Next.js App
					</h1>
					<div className="px-0 sm:px-2">
						<Snippet className="bg-slate-black text-light-white">
							<span>npx create-next-app@latest {`<dir>`}</span>
						</Snippet>
						<SuccessNote content="Don't forget to follow node manager's naming conventions." />

						<InstallationPrompt />

						<h1
							className={`${ubuntu.className} text-2xl mt-3 font-medium text-slate-black`}
						>
							Scripts :
						</h1>
						<ScriptList />

						<h1
							className={`${ubuntu.className} text-2xl mt-4 font-medium text-slate-black`}
						>
							Run Development Server
						</h1>

						<DevelopmentList />
					</div>
				</div>
			</MainContent>

			<TopNavButtons
				nextLink="/notes/next/structure"
				prevLink="/notes/next/"
			/>
		</div>
	);
}
