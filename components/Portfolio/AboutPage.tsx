import Image from "next/image";
import mine from "@/opengraph-image.jpeg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import FadeInSection from "./FadeInSection";
import { techStacks as tech } from "@/data/TechStacks";

export default function AboutPage() {
	return (
		<div className="sm:pr-20 w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-1 items-start justify-around">
			<div className="h-3/4 w-full md:w-[100%]">
				<FadeInSection delay={100}>
					<p className="p-3 sm:p-3 w-full sm:text-2xl  font-normal text-shadow dark:text-slate-200 light:text-slate-800 text-base text-justify">
						I have completed my bootcamp course in the MERN stack
						from{" "}
						<a
							className="font-semibold  text-blue-500 "
							href="https://deerwalk.edu.np/DWIT/"
						>
							{" "}
							Deerwalk Institute{" "}
						</a>{" "}
						. At the same time , I am pursuing by Diploma degree in
						Computer System Technician at{" "}
						<a
							className="text-blue-500  font-semibold"
							href="https://loyalistcollege.com/"
						>
							Loyalist College,
						</a>{" "}
						Toronto, CA.
					</p>
					<div className="w-full px-3 ">
						<p className="font-normal text-shadow light:text-slate-200 sm:mt-4 text-lg sm:font-medium sm:text-xl">
							Technologies I have been working with&#58;
						</p>
						<ul className="text-sm py-1 font-medium sm:text-base sm:mt-2 sm:font-medium list-none">
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
