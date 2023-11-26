"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { reactLinks } from "./react/Links";
import { nextLinks } from "./next/Links";

export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<section className="h-[90vh] ">
			<div className=" w-full flex border border-black">
				<div className="h-[90vh] w-1/6 border border-black overflow-scroll scroll-smooth">
					<h1>Introduction</h1>
					<ul>
						{pathname === "/notes/docs/react" &&
							reactLinks.map((item, ind) => (
								<li key={ind}>
									<Link href={item.links}>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
						{pathname === "/notes/docs/next" &&
							nextLinks.map((item, ind) => (
								<li key={ind}>
									<Link href={item.links}>
										{" "}
										{item.link_title}{" "}
									</Link>
								</li>
							))}
					</ul>
					<div className="border border-black h-96"></div>
				</div>
				<div className="border border-black w-4/6 h-[90vh] overflow-scroll scroll-smooth">
					{children}
				</div>
				<div className="border border-black w1/6"></div>
			</div>
			<div>s</div>
		</section>
	);
}
