import { inter } from "@/app/fonts";
import { Code } from "@nextui-org/code";

export default function TableFiles() {
	return (
		<div className={`${inter.className} font-medium text-base `}>
			<table className="mt-2 w-full sm:w-5/6 table-auto">
				<tr className="border-t-1  border-slate-300">
					<td className="py-3  border-b-1 border-slate-300">
						<Code className="">next.config.js</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Configuration file for Next.js
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>package.json</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Project dependencies and scripts
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>.gitignore</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						Git files and folders to ignore
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>next-env.d.ts</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						TypeScript declaration file for Next.js
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>jsconfig.json | tsconfig.json</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						{" "}
						Configuration file for JavaScript/TypeScript
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>tailwind.config.js</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						{" "}
						Configuration file for Taildwind Css.
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>.eslintrc.json</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						{" "}
						Configuration file for ESLint
					</td>
				</tr>
				<tr>
					<td className="py-3 border-b-1 border-slate-300">
						<Code>README.md</Code>
					</td>
					<td className="py-3 border-b-1 border-slate-300">
						{" "}
						Readme File for GitHub.
					</td>
				</tr>
			</table>
		</div>
	);
}
