import { ubuntu } from "@/app/fonts";

export default function BorderLined({ title }: { title: string }) {
	return (
		<div className="flex justify-between items-center p-2 sm:text-4xl text-2xl font-medium">
			<h1
				className={`${ubuntu.className} dark:text-slate-200 light:text-slate-700`}
			>
				/{title}
			</h1>
			<div className="border border-red-400 w-2/5"></div>
			<div className=" w-2/5"></div>
		</div>
	);
}
