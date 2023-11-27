import type { Metadata } from "next";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { inter, lilitaFont, ubuntu, playpenSans } from "../../layout";
import Image from "next/image";
import react from "@/public/assets/reactImage.png";
import { FaReact } from "react-icons/fa";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "React Js | Introduction ",
		description: "Notes of React js including some snippets",
	};
}

export default function ReactPage() {
	return (
		<div className="flex flex-col gap-5">
			<div className="border w-full flex justify-around h-fit p-2">
				<div className="flex flex-col justify-evenly">
					<h1
						className={`${lilitaFont.className} text-4xl text-slate-black`}
					>
						React Home
					</h1>
					<div className="border w-5/6 h-fit ">
						<h1
							className={`${ubuntu.className} text-3xl font-medium text-slate-black`}
						>
							What is React Js?
						</h1>
						<p
							className={`${inter.className} flex gap-1 text-lg text-justify`}
						>
							<span className="border py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							React is a popular JavaScript library for building
							user interfaces, where user interacts with the
							application without having to reload the page. It is
							used for building single page web-applications (SPA)
							with an ease.
						</p>

						<div className=" h-fit w-full text-left px-6 pt-2">
							<Link
								href="https://react.dev/learn"
								target="_blank"
							>
								<Button
									radius="md"
									className="bg-gradient-to-tr from-blue-500  text-lg font-medium to-blue-600 text-white shadow-lg"
								>
									Get Started
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<Image
					src={react}
					className="hidden rounded-xl shadow-5xl relative right-8 md:block"
					layout="responsive"
					alt="React image"
				/>
			</div>
			<div className=" h-60 text-center">
				<h1
					className={`${lilitaFont.className} text-4xl text-gray-700`}
				>
					Welcome
				</h1>
				<h2
					className={`${playpenSans.className} text-2xl  text-gray-700 `}
				>
					to the{" "}
				</h2>
				<h1
					className={`${lilitaFont.className} text-4xl text-gray-700 `}
				>
					{" "}
					REACT
				</h1>
				<h2
					className={`${playpenSans.className} text-2xl text-gray-700 `}
				>
					Community{" "}
				</h2>
				<div className="border h-fit w-full text-9xl text-[#139CC7] flex justify-center">
					<FaReact />
				</div>
			</div>
		</div>
	);
}
