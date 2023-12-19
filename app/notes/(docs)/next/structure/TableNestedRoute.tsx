import { inter } from "@/app/notes/layout";
import { Code } from "@nextui-org/code";

export default function TableNestedRoutes() {
	return (
		<div className={`${inter.className} font-medium text-base `}>
			<table className="mt-2 w-full sm:w-5/6 table-auto">
				<tr className="border-t-1 border-slate-300">
					<td className="py-3  border-b-1 border-slate-300">
						<Code className="">folder</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Route Segment
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>folder/folder</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Nested Route Segment
					</td>
				</tr>
			</table>
		</div>
	);
}
