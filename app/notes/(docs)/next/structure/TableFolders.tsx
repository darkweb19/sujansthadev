import { inter } from "@/app/fonts";
import { Code } from "@nextui-org/code";

export default function TableFolders() {
	return (
		<div className={`${inter.className} font-medium text-base `}>
			<table className="mt-2 w-full sm:w-5/6 table-auto">
				<tr className="border-t-1 border-slate-300">
					<td className="py-3  border-b-1 border-slate-300">
						<Code className="">app</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						App Router
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>pages</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						pages Router
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>public</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Static assets
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>src</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						{" "}
						Optional application source folder
					</td>
				</tr>
			</table>
		</div>
	);
}
