import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import ServerComponents from "./ServerComponents";
import UsingServerComp from "./UsingServerComp";
import { playpenSans } from "@/app/notes/layout";
import RenderingStrategies from "./RenderingStrategies";
import Link from "next/link";

export default function Rendering() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/next/routing"
				prevLink="/notes/next/structure"
			/>
			<div className="border w-full">
				<MainContent
					heading={"Rendering"}
					contentHeading={""}
					mainDefinition={
						"React and Next.js enable you to build web applications by converting your code into user interfaces. They support rendering on both the server and the client, offering flexibility in how your application is delivered to users."
					}
				>
					<ServerComponents />
					<UsingServerComp />
					<RenderingStrategies />
					<div className="h-20 my-3 ">
						<p className={`${playpenSans.className} text-blue-400`}>
							This page is summarized version of NextJs&apos;s
							official documentation from Server Components.{" "}
							<Link
								className="text-blue-600"
								href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
								target="_blank"
							>
								(here)
							</Link>
						</p>
					</div>
				</MainContent>
			</div>

			<TopNavButtons
				nextLink="/notes/next/routing"
				prevLink="/notes/next/structure"
			/>
		</div>
	);
}
