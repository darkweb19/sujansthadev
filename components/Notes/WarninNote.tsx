import { inter } from "@/app/fonts";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function WarningNote({ content }: { content: string }) {
	return (
		<div className="bg-[#FFF9DF] flex gap-1 mt-3 text-justify p-3 h-fit text-[#D9A800] rounded-lg border border-[#FFE99D]">
			<div className="h-fit py-1 text-xl w-fit">
				<RiVerifiedBadgeFill />
			</div>
			<p className={`${inter.className} `}>
				<span className="font-bold">Tip</span> : {content}
			</p>
		</div>
	);
}
