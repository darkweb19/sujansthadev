"use client";
import Link from "next/link";

import { reactLinks, introLink, reactLinksHooks, hookLink } from "./Links";
import { usePathname } from "next/navigation";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { IoMdArrowDropright } from "react-icons/io";
import RightAsideTab from "@/components/Notes/RightAsideTabs";
import { lato, ubuntu } from "@/app/fonts";

export default function ReactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<section className={`${lato.className} font-medium h-[90vh]`}>
			<div className=" w-full h-full flex">
				{/* this is left aside  */}
				<aside className="h-full w-2/12 border-r-1 border-slate-black py-2 overflow-scroll scroll-smooth hidden md:block">
					<ScrollShadow className="w-full h-full">
						<h1 className="text-2xl text-start p-2 ">
							<Link
								className={`${
									pathname === introLink.link &&
									"underline underline-offset-2 duration-200 dark:text-slate-500 light:text-slate-200"
								} font-semibold ${ubuntu.className}`}
								href={introLink.link}
							>
								Introduction
							</Link>
						</h1>
						<ul className=" w-full px-1 ">
							{reactLinks.map((item, ind) => (
								<li
									key={ind}
									className="px-2 flex items-center justify-start"
								>
									<span className=" h-fit w-fit text-2xl">
										<IoMdArrowDropright />
									</span>
									<Link
										className={`${
											pathname === item.links &&
											"underline underline-offset-2 duration-200  text-slate-400"
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2">
							<Link
								className={`${
									pathname === hookLink.link &&
									"underline underline-offset-2 duration-200 text-slate-400"
								}  font-semibold ${ubuntu.className}`}
								href={hookLink.link}
							>
								React Hooks
							</Link>
						</h1>
						<ul className=" w-full px-1 ">
							{reactLinksHooks.map((item, ind) => (
								<li
									key={ind}
									className="px-2 flex items-center justify-start"
								>
									<span className=" h-fit w-fit text-2xl">
										<IoMdArrowDropright />
									</span>
									<Link
										className={`${
											pathname === item.links &&
											"underline font-medium underline-offset-2 duration-200 text-slate-400 "
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
					</ScrollShadow>
				</aside>

				{/* this is main page of docs  */}
				<main className="border-r-1 border-slate-black p-2 w-full lg:w-9/12 h-full overflow-scroll scroll-smooth">
					{children}
				</main>
				<RightAsideTab />
			</div>
		</section>
	);
}
