import { inter } from "@/app/fonts";
import { Code } from "@nextui-org/react";

export default function TableRoutingFiles() {
	return (
		<div className={`${inter.className} font-medium text-base `}>
			<table className="mt-2 w-full sm:w-5/6">
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">layout</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">Layout</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">page</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">Page</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">loading</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Loading UI
					</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">error</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Error UI
					</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">route</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.ts</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						API Endpoint
					</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">default</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Parallel route fallback page
					</td>
				</tr>
				<tr className="border-t-1 border-slate-300">
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="">not-found</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						<Code className="mr-1">.js</Code>
						<Code className="mr-1">.jsx</Code>
						<Code className="mr-1">.ts</Code>
						<Code className="mr-1">.tsx</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Not Found UI
					</td>
				</tr>
			</table>
		</div>
	);
}
