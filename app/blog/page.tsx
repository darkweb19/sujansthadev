import { playpenSans } from "@/app/notes/layout";
export default function Blog() {
	return (
		<main
			className={`${playpenSans.className} h-screen flex  flex-col text-2xl items-center justify-center`}
		>
			<div>
				<h1>
					This documentation is still being written. Please check back
					later.
				</h1>
			</div>
			<div>Sorry For the inconvenience.</div>😅.
		</main>
	);
}
