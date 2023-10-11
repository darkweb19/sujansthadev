import { FiCode } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";

import Link from "next/link";
import {
	ReactElement,
	JSXElementConstructor,
	ReactNode,
	ReactPortal,
	PromiseLikeOfReactNode,
} from "react";
export default function Cards({
	title,
	content,
	techStack,
	links,
}: {
	title: string;
	content: string;
	techStack: any;
	links: { github: string; share: string };
}) {
	return (
		<article className="card shadow-5xl w-[250px] h-[280px] sm:w-[400px] sm:h-[350px] ">
			{/* card header  */}
			<header className="p-1 h-full w-full flex gap-1 flex-col items-start ">
				<div className="w-fit h-fit text-neutral-950 text-2xl">
					<FiCode />
				</div>
				<h1 className="font-medium py-1 text-lg">{title}</h1>
				<div className="py-3 h-2/4">
					<p className="font-medium text-gray-700 py-2 h-fit w-full text-sm">
						{content}
					</p>
				</div>
				<div className="w-full h-fit py-2">
					<ul className="text-xs font-medium flex gap-1">
						{techStack.map(
							(
								tech:
									| string
									| number
									| boolean
									| ReactElement<
											any,
											string | JSXElementConstructor<any>
									  >
									| Iterable<ReactNode>
									| ReactPortal
									| PromiseLikeOfReactNode
									| null
									| undefined
							) => (
								<li>{tech}</li>
							)
						)}
					</ul>
				</div>
				<div className="flex gap-2 w-full h-fit p-1 text-xl justify-start">
					<Link href={links.github}>
						<BsGithub />
					</Link>
					<Link href={links.share}>
						<MdIosShare />
					</Link>
				</div>
			</header>
		</article>
	);
}
