import { inter } from "@/app/notes/layout";
import { RiVerifiedBadgeFill } from "react-icons/ri";
export default function SuccessNote({ content }: { content: string }) {
	return (
		<div className="bg-[#D7FFEB] flex gap-1 mt-3 text-justify p-3 h-fit text-[#0D924E] rounded-lg border border-[#43E790]">
			<div className="h-fit py-1 text-xl w-fit">
				<RiVerifiedBadgeFill />
			</div>
			<p className={`${inter.className} `}>
				<span className="font-bold">NOTE</span> : {content}
			</p>
		</div>
	);
}
