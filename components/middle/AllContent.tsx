import HomePage from "@/components/middle/HomePage";
import AboutPage from "@/components/middle/AboutPage";
import BorderLined from "@/components/middle/BorderLined";
import Creations from "@/components/middle/Creations";
import Academics from "./Academics";

export default function AllContent() {
	return (
		<main className="h-fit w-screen px-10 md:pl-60">
			<div className=" w-full ">
				{/* first homepage  */}
				<HomePage />

				{/* about page  */}
				<div
					id="about"
					className="w-full h-fit sm:h-fit md:h-fit lg:h-screen"
				>
					<BorderLined title={"statement"} />
					<AboutPage />
				</div>

				{/* personal creations  */}
				<div id="creation" className=" w-full p-2  h-screen mt-10 ">
					<BorderLined title={"creations"} />
					<div className="w-full  h-1/2 flex flex-col gap-4 overflow-y-scroll no-scrollbar">
						<Creations />
					</div>
				</div>

				{/* academics  */}
				<div id="academics" className="w-full p-2 h-fit sm:h-screen">
					<BorderLined title="academics" />
					<Academics />
				</div>
			</div>
		</main>
	);
}
