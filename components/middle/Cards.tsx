import { FiCode } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import Link from "next/link";
import FadeInSection from "./FadeInSection";

export default function Cards({
	data,
	delay,
}: {
	data: {
		title: string;
		content: string;
		techStack: Array<string>;
		links: { github: string; share: string };
	};
	delay: number;
}) {
	return (
		<article className="flex card shadow-5xl w-[250px] h-[300px] sm:w-[280px] sm:h-[350px] ">
			{/* card header  */}
			<header className=" h-full w-full flex gap-0 sm:p-2 flex-col items-start ">
				<FadeInSection delay={delay}>
					<div className="w-fit h-fit text-neutral-950 text-2xl">
						<FiCode />
					</div>
					<h1 className="font-semibold py-1 sm:p-1 text-base sm:text-lg">
						{data.title}
					</h1>
					<div className="py-0 sm:py-2 h-[130px] md:h-[150px]">
						<p className="font-medium text-justify text-sm text-gray-700 py-1 h-fit w-full sm:text-sm">
							{data.content}
						</p>
					</div>
					<div className="w-full h-fit py-1">
						<ul className="text-xs font-medium flex gap-2">
							{data.techStack.map((tech, i) => (
								<li key={i}>{tech}</li>
							))}
						</ul>
					</div>
					<div className="flex gap-4 w-full mt-1 h-fit md:mt-2 md:p-2 text-xl justify-start md:text-2xl">
						<Link
							href={data.links.github}
							className="hover:text-gray-600"
						>
							<BsGithub />
						</Link>
						<Link
							href={data.links.share}
							className="hover:text-gray-600"
						>
							<MdIosShare />
						</Link>
					</div>
				</FadeInSection>
			</header>
		</article>
	);
}
