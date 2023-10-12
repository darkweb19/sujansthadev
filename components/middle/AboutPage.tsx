import Image from "next/image";
import mine from "@/public/assets/mine.jpeg";
import FadeInSection from "./FadeInSection";

export default function AboutPage() {
	const tech = [
		"TypeScript",
		"React Js",
		"Next JS",
		"Node",
		"MongoDb",
		"Graphql",
		"PostgreSQL",
	];
	return (
		<div className=" p-1 w-full flex flex-col sm:flex-row gap-1 items-center justify-around ">
			<div className="h-3/4 w-full sm:w-3/6">
				<FadeInSection delay={100}>
					<p className="p-3 sm:p-3 sm:text-lg font-medium text-slate-800 text-base text-justify">
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
						degree in Computer Science from St Lawrence College
						which is affiliated to
						<a
							href="https://tu.edu.np/"
							className="font-semibold text-blue-500"
						>
							{" "}
							Tribhuwan University.
						</a>{" "}
					</p>
					<div className="w-full px-3 ">
						<p className="font-medium text-lg sm:font-medium sm:text-lg">
							Technologies I have been working with
						</p>
						<ul className="text-sm font-medium sm:text-base sm:font-medium  px-4 list-disc">
							{tech.map((tech, i) => (
								<FadeInSection key={i} delay={(i + 1) * 100}>
									<li key={i}>{tech}</li>
								</FadeInSection>
							))}
						</ul>
					</div>
				</FadeInSection>
			</div>
			<Image
				src={mine}
				className="rounded-xl shadow-4xl  sm:block sm:h-auto sm:w-auto"
				alt="My Pic"
				height={250}
				width={250}
			/>
		</div>
	);
}
