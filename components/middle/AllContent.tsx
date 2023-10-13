import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
import HomePage from "@/components/middle/HomePage";
import AboutPage from "@/components/middle/AboutPage";
import BorderLined from "@/components/middle/BorderLined";
import Creations from "@/components/middle/Creations";

export default function AllContent() {
	return (
		<div className="h-screen w-screen flex flex-col gap-2 sm:grid sm:grid-cols-11">
			<div className=" sm:col-span-2 "></div>
			<div className=" w-full sm:col-span-7 overflow-scroll scroll-smooth no-scrollbar ">
				{/* first homepage  */}
				<HomePage />

				{/* about page  */}
				<div id="about" className="w-full mt-10 h-fit">
					<BorderLined title={"statement"} />
					<AboutPage />
				</div>

				{/* personal creations  */}
				<div id="creation" className=" w-full h-fit p-2  mt-20">
					<BorderLined title={"creations"} />
					<div className="w-full h-fit overflow-y-scroll no-scrollbar">
						<Creations />
					</div>
				</div>
			</div>

			<div className=" sm:col-span-2 mt-20 p-2 ">
				<div className=" h-4/5 w-full flex flex-col items-center justify-between ">
					<SocialLinks />

					<Navigations />
				</div>
			</div>
		</div>
	);
}
