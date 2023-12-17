import TableCustom from "./TableFolders";
import TableFiles from "./TableFiles";
import TableRoutingFiles from "./TableRoutingFiles";
import TableNestedRoutes from "./TableNestedRoute";
import TableDynamicRoutes from "./TableDynamicRoutes";
import { ubuntu } from "@/app/notes/layout";
export default function AllTables() {
	return (
		<>
			<h1
				className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
			>
				Top Level Folders
			</h1>

			<article className="p-0 sm:p-2">
				<TableCustom />
			</article>
			<h1
				className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
			>
				Top Level Files
			</h1>

			<article className="p-0 sm:p-2">
				<TableFiles />
			</article>
			<h1
				className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
			>
				Routing Files
			</h1>
			<article className="p-0 sm:p-2">
				<TableRoutingFiles />
			</article>
			<h1
				className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
			>
				Nested Routes
			</h1>
			<article className="p-0 sm:p-2">
				<TableNestedRoutes />
			</article>
			<h1
				className={`${ubuntu.className} text-2xl mt-2 font-medium text-slate-black`}
			>
				Dynamic Routes
			</h1>
			<article className="p-0 sm:p-2">
				<TableDynamicRoutes />
			</article>
		</>
	);
}
