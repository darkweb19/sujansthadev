import Typing from "@/components/middle/Typing";

import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
export default function LandingPage() {
	console.log("landing page");
	return (
		<div className="h-screen w-screen grid grid-cols-8">
			<div className="col-span-1  ">
				<div className=" text-center mt-3 p-2 font-semibold">Sujan</div>
			</div>
			<div className="col-span-5  overflow-scroll p-3 no-scrollbar ">
				<div className="border h-3/4">
					<div className="border flex flex-col justify-center items-center h-2/4 text-center">
						<p className="text-4xl font-bold gradient-text ">
							HELLO WORLD
						</p>

						<Typing />
					</div>
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
