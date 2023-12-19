import { inter, ubuntu } from "@/app/notes/layout";
import ListStyleDash from "@/components/Notes/Next/ListStyleDash";

export default function UsingServerComp() {
	return (
		<div className="p-0 sm:px-2">
			<h1
				className={`${ubuntu.className} text-3xl mt-3 font-medium text-slate-black`}
			>
				Using Server Components
			</h1>
			<p className={`${inter.className} py-2 text-justify px-3`}>
				By default, Next.js uses Server Components. This allows you to
				automatically implement server rendering with no additional
				configuration, and you can opt into using Client Components when
				needed, see Client Components.
			</p>
			<h1
				className={`${ubuntu.className} text-2xl mt-3 font-medium text-slate-black`}
			>
				Benefits of Server Rendering
			</h1>
			<p className={`${inter.className} mt-2 text-justify px-3`}>
				There are some benefits of rendering on server :
			</p>
			<ListStyleDash
				lists={[
					"Data Fetching : Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.",
					"Security : Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.",
					"Initial Page Load : On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.",
					"Search Engine Optimization : The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.",
				]}
			/>
		</div>
	);
}
