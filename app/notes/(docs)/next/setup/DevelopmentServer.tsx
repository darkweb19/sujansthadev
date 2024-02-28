import { inter } from "@/app/fonts";
import { Code } from "@nextui-org/react";

export default function DevelopmentList() {
	return (
		<ul
			className={`${inter.className} list-decimal py-1 pl-5 sm:pl-8 mt-1 flex flex-col gap-2`}
		>
			<li>
				{" "}
				Run{" "}
				<Code className="text-slate-white bg-slate-black">
					npm run dev{" "}
				</Code>{" "}
				to start the development server.
			</li>
			<li>
				Visit{" "}
				<Code className="text-slate-white bg-slate-black">
					http://localhost:3000{" "}
				</Code>{" "}
				to view your application.
			</li>
			<li>
				Edit{" "}
				<Code className="text-slate-white bg-slate-black">
					app/page.tsx
				</Code>{" "}
				(or{"  "}
				<Code className="text-slate-white bg-slate-black">
					{" "}
					pages/index.tsx
				</Code>
				) file and save it to see the updated result in your browser.
			</li>
		</ul>
	);
}
