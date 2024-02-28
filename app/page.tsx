"use client";
import HomePage from "@/components/middle/HomePage";
import AboutPage from "@/components/middle/AboutPage";
import BorderLined from "@/components/middle/BorderLined";
import Creations from "@/components/middle/Creations";
import Academics from "@/components/middle/Academics";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function AllContent() {
	return (
		<main className="h-fit w-screen px-5  md:pl-10">
			<TracingBeam>
				<div className=" w-full h-fit ">
					{/* homepage  */}
					<HomePage />

					{/* about page  */}
					<div
						id="statement"
						className="w-full h-fit sm:h-fit md:h-fit lg:h-screen"
					>
						<BorderLined title={"statement"} />
						<AboutPage />
					</div>

					{/* personal creations  */}
					<div id="creations" className=" w-full p-2 mt-10 ">
						<BorderLined title={"creations"} />
						<div className="w-full h-fit flex flex-col gap-2">
							<Creations />
						</div>
					</div>

					{/* academics  */}
					<div
						id="academics"
						className="w-full p-1 mt-10 sm:p-2 h-fit sm:h-screen"
					>
						<BorderLined title="academics" />
						<Academics />
					</div>
				</div>
			</TracingBeam>
		</main>
	);
}
