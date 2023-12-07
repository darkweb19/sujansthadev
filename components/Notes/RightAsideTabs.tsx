"use client";
import Link from "next/link";
import { list } from "./Carding";
import { playpenSans } from "@/app/notes/layout";
import { usePathname } from "next/navigation";

export default function RightAsideTab() {
	const pathname = usePathname();
	return (
		<div className="items-center h-full hidden lg:flex w-1/12">
			<ul className=" text-start w-full px-6 py-1">
				{list.map((links, index) => (
					<Link
						href={`/notes${links.link}`}
						className={`${playpenSans.className} text-xl font-normal`}
						key={index}
					>
						{/* 233 34 22 text bg : 255 245 244 border:255 197 193*/}

						<li
							className={` mt-2 ${
								pathname.startsWith(`/notes${links.link}`) &&
								"underline underline-offset-2 text-blue-500 duration-400"
							}`}
						>
							{links.link}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
