import HomePage from "@/components/middle/HomePage";
import AboutPage from "@/components/middle/AboutPage";
import BorderLined from "@/components/middle/BorderLined";
import Creations from "@/components/middle/Creations";
import Academics from "@/components/middle/Academics";

export default function AllContent() {
	return (
		<main className="h-fit w-screen px-3 md:pl-60">
			<div className=" w-full ">
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
				<div id="creations" className=" w-full p-2  h-screen mt-10 ">
					<BorderLined title={"creations"} />
					<div className="w-full  h-1/2 flex flex-col gap-4 overflow-y-scroll no-scrollbar">
						<Creations />
					</div>
				</div>

				{/* academics  */}
				<div
					id="academics"
					className="w-full p-1 sm:p-2 h-fit sm:h-screen"
				>
					<BorderLined title="academics" />
					<Academics />
				</div>
			</div>
		</main>
	);
}
