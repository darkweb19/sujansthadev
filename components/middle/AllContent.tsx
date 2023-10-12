import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
import HomePage from "@/components/middle/HomePage";
import AboutPage from "@/components/middle/AboutPage";
import BorderLined from "@/components/middle/BorderLined";
import Creations from "@/components/middle/Creations";
// import { motion, useInView } from "framer-motion";
// import { useEffect, useRef } from "react";

export default function AllContent() {
	// const ref = useRef(null);
	// const isView = useInView(ref, { once: true });

	// variants={{
	// 		hidden: { opacity: 0, y: 75 },
	// 		visible: { opacity: 1, y: 0 },
	// 	}}
	// 	initial="hidden"
	// 	animate="visible"
	// 	transition={{ duration: 1, delay: 0.7 }}

	// useEffect(() => {
	// 	console.log(isView);
	// }, [isView]);

	return (
		<div className="h-screen w-screen flex flex-col gap-2 sm:grid sm:grid-cols-11">
			<div className=" sm:col-span-2 "></div>
			<div className=" w-full sm:col-span-7 overflow-scroll scroll-smooth no-scrollbar ">
				{/* first homepage  */}
				<HomePage />

				{/* about page  */}
				<div className="w-full h-fit">
					<BorderLined title={"statement"} />
					<AboutPage />
				</div>

				{/* personal creations  */}
				<div className=" w-full p-2 h-fit mt-10">
					<BorderLined title={"creations"} />
					<div className="w-full overflow-scroll no-scrollbar">
						<Creations />
					</div>
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
