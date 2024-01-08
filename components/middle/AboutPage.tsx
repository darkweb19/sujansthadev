import Image from "next/image";
import mine from "@/opengraph-image.jpeg";
import FadeInSection from "./FadeInSection";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
	TbBrandTypescript,
	TbBrandNextjs,
	TbBrandNodejs,
	TbBrandMongodb,
	TbBrandGraphql,
} from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export default function AboutPage() {
	const tech = [
		{ name: "Next JS ", icons: <TbBrandNextjs /> },
		{ name: "TypeScript", icons: <TbBrandTypescript /> },
		{ name: "React Js ", icons: <SiReact /> },
		{ name: "Node", icons: <TbBrandNodejs /> },
		{ name: "MongoDb", icons: <TbBrandMongodb /> },
		{ name: "Graphql", icons: <TbBrandGraphql /> },
		{ name: "PostgreSQL", icons: <BiLogoPostgresql /> },
	];
	return (
		<div className="sm:pr-40 w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-1 items-start justify-around">
			<div className="h-3/4 w-full sm:w-5/6 md:w-5/6">
				<FadeInSection delay={100}>
					<p className="p-3 sm:p-3 w-full sm:text-lg font-medium text-slate-800 text-base text-justify">
						I have completed my bootcamp course in the MERN stack
						from{" "}
						<a
							className="font-semibold  text-blue-500 "
							href="https://deerwalk.edu.np/DWIT/"
						>
							{" "}
							Deerwalk Institute{" "}
						</a>{" "}
						. At the same time , I am pursuing by Bachelor&apos;s
						degree in Computer Science from St Lawrence College,
						affiliated to
						<a
							href="https://tu.edu.np/"
							className="font-semibold text-blue-500"
						>
							{" "}
							Tribhuwan University.
						</a>{" "}
					</p>
					<div className="w-full px-3 ">
						<p className="font-medium text-lg sm:font-medium sm:text-xl">
							Technologies I have been working with&#58;
						</p>
						<ul className="text-sm py-1 font-medium sm:text-base sm:font-medium list-none">
							{tech.map((tech, i) => (
								<FadeInSection key={i} delay={(i + 1) * 100}>
									<li
										className="flex items-center gap-1 h-fit"
										key={i}
									>
										<IoIosArrowDroprightCircle />
										{tech.name}
										<span className="text-2xl md:text-3xl py-[1px] px-[3px] text-center text-gray-700">
											{tech.icons}
										</span>
									</li>
								</FadeInSection>
							))}
						</ul>
					</div>
				</FadeInSection>
			</div>

			<Image
				src={mine}
				className="rounded-xl shadow-4xl sm:block sm:h-auto sm:w-auto"
				alt="My Pic"
				height={250}
				width={250}
			/>
		</div>
	);
}
