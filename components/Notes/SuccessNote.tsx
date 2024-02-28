import { inter } from "@/app/fonts";
import Link from "next/link";
import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

interface SuccessNoteProps {
	type?: "Note" | "Tip";
	content: string;
	link?: string;
	linktext?: string;
}

export default function SuccessNote({
	type,
	content,
	link,
	linktext,
}: SuccessNoteProps) {
	return (
		<div className="bg-[#D7FFEB] flex gap-1 mt-3 text-justify p-3 h-fit text-[#0D924E] rounded-lg border border-[#43E790]">
			<div className="h-fit py-1 text-xl w-fit">
				<RiVerifiedBadgeFill />
			</div>
			<p className={`${inter.className} `}>
				<span className="font-bold">{type ? type : "Tip"}</span> :{" "}
				{content}{" "}
				{link && (
					<Link
						className="text-blue-600 text-base font-bold"
						href={link}
						target="_blank"
					>
						({linktext}).
					</Link>
				)}
			</p>
		</div>
	);
}
