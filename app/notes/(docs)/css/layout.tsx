import RightAsideTab from "@/components/Notes/RightAsideTabs";
import { lato } from "../../layout";
import { ScrollShadow } from "@nextui-org/react";

export default function LayoutNext({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className={`${lato.className} font-medium h-[90vh]`}>
			<article className=" w-full h-full flex border  ">
				<aside className="h-full w-2/12 border-r-2 border-slate-black py-2 overflow-scroll scroll-smooth hidden md:block"></aside>
				<ScrollShadow className="w-full h-full">
					<h1 className="text-2xl text-start p-2  ">Inrt</h1>
				</ScrollShadow>
				<main className="border-r-2 border-slate-black p-2 w-full lg:w-9/12 h-[90dvh] overflow-scroll scroll-smooth">
					{children}
				</main>
				<RightAsideTab />
			</article>
		</section>
	);
}
