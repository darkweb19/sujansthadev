import { inter, ubuntu } from "@/app/notes/layout";
import ListStyleDash from "@/components/Notes/Next/ListStyleDash";

export default function ServerComponents() {
	return (
		<div className="p-0 sm:px-2">
			<h1
				className={`${ubuntu.className} text-3xl mt-3 font-medium text-slate-black`}
			>
				Server Components
			</h1>
			<p className={`${inter.className} text-justify px-3`}>
				React Server Components enhance server-side rendering
				capabilities by allowing UI code to be rendered and cached on
				the server. Next.js takes this further by segmenting rendering
				based on route components, enabling features like streaming.
				There are three server rendering strategies:
			</p>
			<ListStyleDash
				lists={["Static Rendering", "Dynamic Rendering", "Streaming"]}
			/>
			<p className={`${inter.className} py-2 mt-2 text-justify px-3`}>
				This page will go through how Server Components work, when you
				might use them, and the different server rendering strategies.
			</p>
		</div>
	);
}
