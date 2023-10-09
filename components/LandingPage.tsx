import Typing from "@/components/middle/Typing";
import Image from "next/image";
import Navigations from "@/components/rightNavs/Navigations";
import SocialLinks from "@/components/rightNavs/SocialLinks";
import mine from "@/public/assets/mine.jpeg";

export default function LandingPage() {
	return (
		<div className="h-screen w-screen grid grid-cols-11">
			<div className="col-span-2  "></div>
			<div className="col-span-7 overflow-scroll border p-1 no-scrollbar scroll-smooth">
				{/* first homepage  */}
				<div className=" flex items-center h-full">
					<div className=" flex flex-col justify-center  items-center h-2/4 ">
						<div className=" w-3/5 ">
							<p className="text-5xl text-start font-bold gradient-text ">
								HELLO WORLD
							</p>
							<div className="flex  p-1  text-3xl font-semibold text-slate-600">
								<Typing />
							</div>
							<div className=" p-1  w-4/5 text-slate-700">
								<p className="text-justify font-medium text-lg">
									I am a Software Engineer and a student from
									Nepal. I have a keen interest in Full-Stack
									Development, Artificial Intelligence, IOT
									and everything in between
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* about page  */}
				<div className="w-full h-screen">
					{/* border underlined  */}
					<div className="flex justify-between items-center p-2 text-2xl font-medium">
						<h1>/statement</h1>
						<div className="border border-red-400 w-2/5"></div>
						<div className=" w-2/5"></div>
					</div>
					<div className=" p-1 flex gap-1 items-center justify-around">
						<div className="h-3/4 w-3/6">
							<p className="border p-3 font-medium text-justify">
								I have completed my bootcamp course in the MERN
								stack from{" "}
								<a
									className="font-semibold  text-blue-500 "
									href="https://deerwalk.edu.np/DWIT/"
								>
									{" "}
									Deerwalk Institute{" "}
								</a>{" "}
								. At the same time , I am pursuing by Bachelor's
								degree in Computer Science from St Lawrence
								College which is affiliated to{" "}
								<a
									href="https://tu.edu.np/"
									className="font-semibold text-blue-500"
								>
									Tribhuwan University
								</a>{" "}
							</p>
						</div>
						<Image
							src={mine}
							className="rounded-xl shadow-4xl"
							alt="My Pic"
							height={250}
							width={250}
						/>
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
