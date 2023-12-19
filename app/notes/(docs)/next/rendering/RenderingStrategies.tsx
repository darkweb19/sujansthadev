import { ubuntu, inter } from "@/app/notes/layout";

export default function RenderingStrategies() {
	return (
		<div className="p-0 mt-2 sm:px-2">
			<article>
				<h1 className={`${ubuntu.className} text-3xl text-gray-700`}>
					Server Rendering Strategies
				</h1>
				<p className={`${inter.className} py-2 text-justify px-3`}>
					The three Server Rendering Strategies are :
				</p>
				<h2
					id="static"
					className={`${ubuntu.className} mt-2 ml-2 text-2xl text-gray-700`}
				>
					Static Rendering (Default)
				</h2>
				<p className={`${inter.className} py-2 text-justify px-3`}>
					With Static Rendering, routes are rendered at build time, or
					in the background after data revalidation. The result is
					cached and can be pushed to a Content Delivery Network
					(CDN). This optimization allows you to share the result of
					the rendering work between users and server requests.
				</p>
				<p className={`${inter.className} py-2 text-justify px-3`}>
					Static rendering is useful when a route has data that is not
					personalized to the user and can be known at build time,
					such as a static blog post or a product page.
				</p>
			</article>

			<article>
				<h2
					id="static"
					className={`${ubuntu.className} mt-2 ml-2 text-2xl text-gray-700`}
				>
					Dynamic Rendering
				</h2>
				<p className={`${inter.className} py-1 text-justify px-3`}>
					With Dynamic Rendering, routes are rendered for each user at
					request time.
				</p>
				<p className={`${inter.className} py-2 text-justify px-3`}>
					Dynamic rendering is useful when a route has data that is
					personalized to the user or has information that can only be
					known at request time, such as cookies or the URL&apos;s
					search params.
				</p>
			</article>

			<article>
				<h2
					id="static"
					className={`${ubuntu.className} mt-2 ml-2 text-2xl text-gray-700`}
				>
					Streaming
				</h2>
				<p className={`${inter.className} py-2 text-justify px-3`}>
					Streaming enables you to progressively render UI from the
					server. Work is split into chunks and streamed to the client
					as it becomes ready. This allows the user to see parts of
					the page immediately, before the entire content has finished
					rendering.
				</p>
				<p className={`${inter.className} py-1 text-justify px-3`}>
					Streaming is built into the Next.js App Router by default.
					This helps improve both the initial page loading
					performance, as well as UI that depends on slower data
					fetches that would block rendering the whole route. For
					example, reviews on a product page.
				</p>
			</article>
		</div>
	);
}
