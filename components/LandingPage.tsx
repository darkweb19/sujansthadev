import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
import HomePage from "./middle/HomePage";
import AboutPage from "./middle/AboutPage";
import BorderLined from "./middle/BorderLined";

export default function LandingPage() {
	return (
		<div className="h-screen w-screen flex flex-col gap-2 sm:grid sm:grid-cols-11">
			<div className=" sm:col-span-2 "></div>
			<div className=" w-full sm:col-span-7 overflow-scroll  no-scrollbar scroll-smooth">
				{/* first homepage  */}
				<HomePage />

				{/* about page  */}
				<div className="w-full h-screen">
					{/* border underlined  */}
					<BorderLined title={"statement"} />

					{/* about page  */}
					<AboutPage />
				</div>
			</div>

			<div className=" sm:col-span-2  p-2 ">
				<div className=" h-4/5 w-full flex flex-col items-center justify-between ">
					<SocialLinks />

					<Navigations />
				</div>
			</div>
		</div>
	);
}
