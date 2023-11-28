"use client";
import { list } from "@/components/Notes/Carding";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { playpenSans } from "../layout";

export default function docsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<section>
			<div className="hidden md:block border-b-2 border-violet-400">
				<ul className="flex gap-4 items-center justify-center">
					{list.map((links, index) => (
						<Link
							href={`/notes${links.link}`}
							className={`${playpenSans.className} text-xl font-normal`}
							key={index}
						>
							<li
								className={`${
									pathname.startsWith(
										`/notes${links.link}`
									) &&
									"underline underline-offset-2 text-blue-500 duration-400"
								}`}
							>
								{links.link}
							</li>
						</Link>
					))}
				</ul>
			</div>

			{children}
		</section>
	);
}
