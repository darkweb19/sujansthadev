import { inter } from "@/app/fonts";
import { FaCircleExclamation } from "react-icons/fa6";

export default function DangerNote({ content }: { content: string }) {
	return (
		<div className="bg-[#FFF5F4] flex gap-1 mt-3 text-justify p-3 h-fit text-[#E92216] rounded-lg border border-[#FFC5C1]">
			<div className="h-fit py-1 text-xl w-fit">
				<FaCircleExclamation />
			</div>
			<p className={`${inter.className} font-medium`}>
				<span className="font-bold">Warning</span> : {content}
			</p>
		</div>
	);
}
