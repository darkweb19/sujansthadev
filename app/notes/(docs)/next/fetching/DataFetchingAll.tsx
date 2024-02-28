import { Code } from "@nextui-org/react";
import Link from "next/link";

import CodePreview from "@/components/Notes/CodePreview";
import {
	cachingCode,
	demandRevalidateCode,
	fetchCode,
	revalidateTagCode,
	timeRevalidateCode,
} from "./Code";
import ListStyleDash from "@/components/Notes/Next/ListStyleDash";
import WarningNote from "@/components/Notes/WarninNote";
import { inter, ubuntu } from "@/app/fonts";
export default function DataFetchingAll() {
	return (
		<>
			<div className="px-4">
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					There are four ways to fetch data :
				</p>
				<ul
					className={`${inter.className} px-1 sm:px-3 flex mt-2 flex-col gap-2`}
				>
					<li className="flex gap-3">
						{" "}
						<span>-</span> {"   "}
						<Link href="#fetch">
							On the server, with <Code className="">fetch</Code>
						</Link>
					</li>
					<li className="flex gap-3">
						{" "}
						<span>-</span> {"  "}
						<Link href="#">
							On the server, with third-party libraries
						</Link>
					</li>
					<li className="flex gap-3">
						{" "}
						<span>-</span> {"   "}
						<Link href={"#"}>
							On the client, via a Route Handler
						</Link>
					</li>
					<li className="flex gap-3">
						{" "}
						<span>-</span> {"   "}
						<Link href={"#"}>
							On the client, with third-party libraries.
						</Link>
					</li>
				</ul>
			</div>
			<div className="px-4">
				<h1
					className={`${ubuntu.className} text-3xl mt-5 font-medium text-slate-black`}
				>
					Data Fetching on the Server with <Code>Fetch</Code>
				</h1>
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					You can use{" "}
					<Code className="bg-slate-black text-slate-white">
						fetch
					</Code>{" "}
					with async/await in Server Components, in Route Handlers,
					and in Server Actions.
				</p>
				<h2
					className={`${ubuntu.className} text-2xl mt-3 mb-3 font-medium text-slate-black`}
				>
					Example
				</h2>
				<CodePreview code={fetchCode} lines={[2, 15]} />
				<WarningNote content="To use async/await in a Server Component with TypeScript, you'll need to use TypeScript 5.1.3 or higher and @types/react 18.2.8 or higher." />
			</div>

			<div>
				<h1
					className={`${ubuntu.className} text-3xl mt-5 font-medium text-slate-black`}
				>
					Data Caching
				</h1>
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					Caching stores data so it doesn&apos;t need to be re-fetched
					from your data source on every request.
				</p>
				<p className={`${inter.className} mt-3 mb-4 text-justify px-2`}>
					By default, Next.js automatically caches the returned values
					of fetch in the Data Cache on the server. This means that
					the data can be fetched at build time or request time,
					cached, and reused on each data request.
				</p>
				<CodePreview code={cachingCode} lines={[2]} />
				<p className={`${inter.className} mt-5 mb-5 text-justify px-2`}>
					<Code className="bg-slate-black text-slate-white">
						fetch
					</Code>{" "}
					requests that use the{" "}
					<Code className="bg-slate-black text-slate-white">
						POST
					</Code>{" "}
					method are also automatically cached. Unless it&apos;s
					inside a Route Handler that uses the{" "}
					<Code className="bg-slate-black text-slate-white">
						POST
					</Code>{" "}
					method, then it will not be cached.
				</p>
			</div>
			<div>
				<h1
					className={`${ubuntu.className} text-3xl mt-5 font-medium text-slate-black`}
				>
					Revalidating Data
				</h1>
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					Revalidation is the process of purging the Data Cache and
					re-fetching the latest data. This is useful when your data
					changes and you want to ensure you show the latest
					information.
				</p>
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					Cached data can be revalidated in two ways:
				</p>
				<ListStyleDash
					lists={[
						"Time-based revalidation: Automatically revalidate data after a certain amount of time has passed. This is useful for data that changes infrequently and freshness is not as critical.",
						"On-demand revalidation: Manually revalidate data based on an event (e.g. form submission). On-demand revalidation can use a tag-based or path-based approach to revalidate groups of data at once.",
					]}
				/>
				<h1
					className={`${ubuntu.className} text-2xl mt-5 font-medium text-slate-black`}
				>
					{" "}
					Time-based Revalidation
				</h1>
				<p className={`${inter.className} mt-3 text-justify px-2`}>
					To revalidate data at a timed interval, you can use the
					option of fetch to set the cache lifetime of a resource (in
					seconds).
				</p>
				<CodePreview code={timeRevalidateCode} />
				<h1
					className={`${ubuntu.className} text-2xl mt-5 font-medium text-slate-black`}
				>
					{" "}
					On-Demand Revalidation
				</h1>
				<p className={`${inter.className} mt-3 mb-3 text-justify px-2`}>
					Data can be revalidated on-demand by path (revalidatePath)
					or by cache tag (revalidateTag)
				</p>
				<CodePreview code={demandRevalidateCode} lines={[2]} />
				<p className={`${inter.className} mt-3 mb-3 text-justify px-2`}>
					You can then revalidate this fetch call tagged with
					collection by calling revalidateTag in a Server Action:
				</p>

				<CodePreview code={revalidateTagCode} file="action" />
			</div>
		</>
	);
}
