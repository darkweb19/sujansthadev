import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
import HomePage from "./middle/HomePage";
import AboutPage from "./middle/AboutPage";

export default function LandingPage() {
	return (
		<div className="h-screen w-screen grid grid-cols-11">
			<div className="col-span-2  "></div>
			<div className="col-span-7 overflow-scroll p-1 no-scrollbar scroll-smooth">
				{/* first homepage  */}
				<HomePage />

				{/* about page  */}
				<div className="w-full h-screen">
					{/* border underlined  */}
					<div className="flex justify-between items-center p-2 text-2xl font-medium">
						<h1>/statement</h1>
						<div className="border border-red-400 w-2/5"></div>
						<div className=" w-2/5"></div>
					</div>

					{/* about page  */}
					<AboutPage />
				</div>
			</div>

			<div className="col-span-2 p-2 ">
				<div className=" h-4/5 w-full flex flex-col items-center justify-between ">
					<SocialLinks />

					<Navigations />
				</div>
			</div>
		</div>
	);
}
