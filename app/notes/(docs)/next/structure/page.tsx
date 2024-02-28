import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import DangerNote from "@/components/Notes/DangerNote";
import AllTables from "./AllTables";
import Link from "next/link";
import { Metadata } from "next/types";
import { playpenSans } from "@/app/fonts";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Project Structure of Next js Framework.",
		description:
			"This Page shows how's nextjs's project files/folder structure ares initialized. It only focuses on latest App Router's File/Folder Structure and its basic usecases.",
	};
}

export default function NextStructure() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/next/structure"
				prevLink="/notes/next/"
			/>
			<MainContent
				heading={"Project Structure"}
				contentHeading={""}
				mainDefinition={
					"This page provides an overview of the file and folder structure of a Next.js project. It covers top-level files and folders, configuration files, and routing conventions within the app and pages directories."
				}
			>
				<div className="p-0 sm:p-1 border h-fit">
					<p
						className={`${playpenSans.className} p-2 text-blue-400 `}
					>
						{" "}
						This page contents are inspired from NextJS&apos;s
						official documentation.{" "}
						<Link
							className="text-blue-700"
							href="https://nextjs.org/docs/getting-started/project-structure"
						>
							(here)
						</Link>
					</p>
					<AllTables />
				</div>
				<DangerNote content="All of these above are only applicable for latest App Router (Next v13+)" />
			</MainContent>

			<TopNavButtons
				nextLink="/notes/next/structure"
				prevLink="/notes/next/"
			/>
		</div>
	);
}
