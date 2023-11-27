"use client";
import Link from "next/link";
import { lato } from "../../layout";
import { nextLinks, mainPageLink } from "./Links";
import { usePathname } from "next/navigation";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

export default function NextLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	console.log(pathname);
	return (
		<section className={`${lato.className} font-medium h-[90vh]`}>
			<div className=" w-full h-full flex border  ">
				<div className="h-full w-1/5 border-r-2 border-slate-black p-2 overflow-scroll scroll-smooth">
					<ScrollShadow className="w-full h-full">
						<h1 className="text-xl font-medium">
							<Link href={mainPageLink.link}>Introduction</Link>
						</h1>
						<ul className=" w-full  px-3">
							{nextLinks.map((item, ind) => (
								<li key={ind}>
									<Link
										className={`${
											pathname === item.links &&
											"underline underline-offset-2 duration-200"
										} `}
										href={item.links}
									>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
							<div className="border h-80"></div>
							<div className="border h-80"></div>
						</ul>
					</ScrollShadow>
				</div>
				<div className="border-r-2 border-slate-black p-2  w-4/5 h-[90vh] overflow-scroll scroll-smooth">
					{children}
					<div className="border border-black h-96"></div>
				</div>
			</div>
			<div></div>
		</section>
	);
}
