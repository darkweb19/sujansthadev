import MainContent from "@/components/Notes/MainContent";
import TopNavButtons from "@/components/Notes/TopNavButtons";
import type { Metadata } from "next";
import { inter, ubuntu } from "../../layout";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { TbBrandNextjs } from "react-icons/tb";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Next Js Notes ",
		description: "Notes of Next js including some snippets",
	};
}

export default function NextPage() {
	return (
		<div className="flex flex-col gap-1">
			<TopNavButtons
				nextLink="/notes/next/setup"
				prevdisabled
				prevLink="#"
			/>

			<MainContent
				heading={"NEXT JS"}
				contentHeading={"What is Next JS?"}
				mainDefinition={
					"Next Js is an open-source react framework for building full-stack web applications. It's designed to build react application with server-side rendering(SSR) and other advanced feature."
				}
				logo={<TbBrandNextjs />}
			>
				<div>
					<p className={`${inter.className}  p-2 text-justify `}>
						Under the hood, Next.js also abstracts and automatically
						configures tooling needed for React, like bundling,
						compiling, and more. This allows you to focus on
						building your application instead of spending time with
						configuration.
					</p>

					<div className="p-1">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							Main Features
						</h1>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Routing
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Rendering
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Data-Fetching
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Styling
						</p>
						<p
							className={`${inter.className} flex items-center px-2 gap-1 text-xl text-justify `}
						>
							<span className="border py-1 h-fit text-xs">
								<FaCircle />
							</span>
							Optimizations
						</p>
					</div>
					<h1
						className={`${ubuntu.className} text-3xl mt-2 font-medium text-slate-black`}
					>
						Learn Next
					</h1>
					<p className={`${inter.className} p-2 text-justify `}>
						You can learn next js 14 from{"   "}
						<a
							href="https://nextjs.org/learn?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=home"
							target="_blank"
							className="text-blue-500"
						>
							here
						</a>
						.
					</p>
					<h1
						className={`${ubuntu.className} text-3xl mt-2 font-medium text-slate-black`}
					>
						Installations
					</h1>
					<p className={`${inter.className} p-2 text-justify `}>
						To get started, checkout the{"   "}
						<Link
							className="text-blue-500"
							href="/notes/next/setup"
						>
							Installation
						</Link>{" "}
						guide.
					</p>
				</div>
			</MainContent>

			<TopNavButtons
				nextLink="/notes/next/setup"
				prevdisabled
				prevLink="#"
			/>
		</div>
	);
}
