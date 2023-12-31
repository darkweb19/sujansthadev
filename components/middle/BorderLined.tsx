import { ubuntu } from "@/app/notes/layout";

export default function BorderLined({ title }: { title: string }) {
	return (
		<div className="flex justify-between items-center p-2 sm:text-4xl text-2xl font-medium">
			<h1 className={`${ubuntu.className} text-slate-700`}>/{title}</h1>
			<div className="border border-red-400 w-2/5"></div>
			<div className=" w-2/5"></div>
		</div>
	);
}
