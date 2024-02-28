import { inter } from "@/app/fonts";
import { Code } from "@nextui-org/react";

export default function ScriptList() {
	return (
		<ul
			className={`${inter.className} px-1 sm:px-2 flex mt-2 flex-col gap-2`}
		>
			<li>
				{" "}
				<span>-</span>{" "}
				<Code className="text-slate-white bg-slate-black">dev</Code> :
				runs{" "}
				<Code className="bg-slate-black text-slate-white">
					next dev
				</Code>
				{"   "}
				to start development server.
			</li>
			<li>
				{" "}
				<span>-</span>{" "}
				<Code className="text-slate-white bg-slate-black">build</Code> :
				runs{" "}
				<Code className="bg-slate-black text-slate-white">
					next build
				</Code>
				{"  "}
				to build the application for production usage.
			</li>
			<li>
				{" "}
				<span>-</span>{" "}
				<Code className="text-slate-white bg-slate-black">start</Code> :
				runs{" "}
				<Code className="bg-slate-black text-slate-white">
					next start
				</Code>
				{"   "}
				to start a Next.js production server.
			</li>
			<li>
				{" "}
				<span>-</span>{" "}
				<Code className="text-slate-white bg-slate-black">lint</Code> :
				runs{" "}
				<Code className="bg-slate-black text-slate-white">
					next lint
				</Code>
				{"   "}
				to set up Next.js&apos;s built-in ESLint configuration.
			</li>
		</ul>
	);
}
