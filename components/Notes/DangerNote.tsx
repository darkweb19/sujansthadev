import { inter } from "@/app/notes/layout";
import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function DangerNote({ content }: { content: string }) {
	return (
		<div className="bg-[#FFF5F4] flex gap-1 mt-3 text-justify p-3 h-fit text-[#E92216] rounded-lg border border-[#FFC5C1]">
			<div className="h-fit py-1 text-xl w-fit">
				<RiVerifiedBadgeFill />
			</div>
			<p className={`${inter.className} `}>
				<span className="font-bold">Warning</span> : {content}
			</p>
		</div>
	);
}
