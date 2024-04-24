"use client";
import Link from "next/link";

import {
	BasicsHeading,
	advance,
	basics,
	dom,
	mainPageLink,
	methods,
	oop,
	variables,
} from "./Links";
import { usePathname } from "next/navigation";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { IoMdArrowDropright } from "react-icons/io";
import RightAsideTab from "@/components/Notes/RightAsideTabs";
import { basicTag } from "../html/Links";
import { lato } from "@/app/fonts";

export default function NextLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	return (
		<section className={`${lato.className} font-medium h-[90vh]`}>
			<article className=" w-full h-full flex ">
				<aside className="h-full w-2/12 border-r-2 border-slate-black py-2 overflow-scroll scroll-smooth hidden md:block">
					<ScrollShadow className="w-full h-full">
						<h1 className="text-2xl text-start p-2  ">
							<Link
								className={`${
									pathname === mainPageLink.link &&
									"underline underline-offset-2 duration-200 dark:text-slate-400 light:text-slate-600 font-semibold"
								}`}
								href={mainPageLink.link}
							>
								Introduction
							</Link>
						</h1>
						<ul className=" w-full h-fit px-1 ">
							{variables.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 text-slate-600"
										} text-lg font-semibold`}
										href={item.links}
									>
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2 ">
							<span
								className={`${" dark:text-slate-200 light:text-slate-600 font-semibold"}`}
							>
								Basics
							</span>
						</h1>
						<ul className=" w-full px-1 ">
							{basics.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 dark:text-slate-400 light:text-slate-400"
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2 ">
							<span
								className={`${" dark:text-slate-200 light:text-slate-600 font-semibold"}`}
							>
								Methods
							</span>
						</h1>
						<ul className=" w-full px-1 ">
							{methods.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 text-slate-600"
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2 ">
							<span
								className={`${" dark:text-slate-200 light:text-slate-600 font-semibold"}`}
							>
								OOP
							</span>
						</h1>
						<ul className=" w-full px-1 ">
							{oop.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 text-slate-600"
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2 ">
							<span
								className={`${" dark:text-slate-200 light:text-slate-600 font-semibold"}`}
							>
								DOM & BOM
							</span>
						</h1>
						<ul className=" w-full px-1 ">
							{dom.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 text-slate-600"
										} text-lg font-semibold`}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						</ul>
						<h1 className="text-2xl text-start p-2 ">
							<span
								className={`${" dark:text-slate-200 light:text-slate-600 font-semibold"}`}
							>
								Advanced
							</span>
						</h1>
						<ul className=" w-full px-1 ">
							{advance.map((item, ind) => (
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
											"underline underline-offset-2 duration-200 text-slate-600"
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
				<main className="border-r-2 border-slate-black p-2 w-full lg:w-9/12 h-[90dvh] overflow-scroll scroll-smooth">
					{children}
				</main>
				<RightAsideTab />
			</article>
		</section>
	);
}
