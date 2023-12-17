import { inter } from "@/app/notes/layout";
import { Code } from "@nextui-org/code";

export default function TableDynamicRoutes() {
	return (
		<div className={`${inter.className} font-medium text-base `}>
			<table className="mt-2 w-full sm:w-5/6 table-auto">
				<tr className="border-t-1 border-slate-300">
					<td className="py-3  border-b-1 border-slate-300">
						<Code className="">{`[folder]`}</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Dynamic Route Segment
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>{`[...folder]`}</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Catch-all route segment
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>{`[[...folder]]`}</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Optional Catch-all route segment
					</td>
				</tr>
			</table>
		</div>
	);
}
