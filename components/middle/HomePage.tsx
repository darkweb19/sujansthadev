"use client";
import Lottie from "lottie-react";
import Typing from "./Typing";
import gmailData from "@/public/assets/gmail.json";
import FadeInSection from "./FadeInSection";
import { Playpen_Sans } from "next/font/google";
import { Lilita_One } from "next/font/google";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export const ubuntu = Playpen_Sans({ subsets: ["latin"] });
export const lilitaFont = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function HomePage() {
	//for sending mail to me
	function changeMailIcon() {
		window.location.href = "mailto:me@sujansthadev.com.np";
	}

	return (
		<div className="flex items-center justify-center w-full h-screen ">
			<div className="flex flex-col justify-start items-center sm:items-start h-fit">
				<div className="w-[96%] md:w-3/5 flex flex-col justify-center items-start">
					<FadeInSection delay={200}>
						<p
							className={`${lilitaFont.className} text-3xl  p-1 sm:text-5xl gradient-text`}
						>
							HELLO WORLD
						</p>
					</FadeInSection>
					<FadeInSection delay={500}>
						<div
							className={`${ubuntu.className} flex text-center p-2 sm:p-1 text-2xl sm:text-3xl font-semibold dark:text-slate-white light:text-slate-600`}
						>
							<Typing />
						</div>
					</FadeInSection>
					<FadeInSection delay={700}>
						<div className=" p-2  w-4/5 dark:text-slate-200 light:text-slate-800">
							<p
								className={`text-justify font-normal text-base sm:text-lg`}
							>
								I am a Software Engineer and a student living in
								Canada . I have a keen interest in Full-Stack
								Development, Artificial Intelligence, IOT and
								everything in between.
							</p>
						</div>
					</FadeInSection>

					{/* gmail animation  */}
					<FadeInSection delay={900}>
						<div className="h-fit flex items-center">
							<div className="gmail w-[15%] sm:w-[11%]">
								<Lottie
									animationData={gmailData}
									onClick={() => changeMailIcon()}
								/>
							</div>

							<Button className="relative left-10 font-medium bg-gradient-to-tr from-pink-500 text-slate-white to-yellow-500 shadow-lg">
								<Link
									target="_blank"
									href="https://hefkbmzoqjamoaddfnrb.supabase.co/storage/v1/object/sign/files/CV.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmaWxlcy9DVi5wZGYiLCJpYXQiOjE3MTc5NTA3OTQsImV4cCI6MTc0OTQ4Njc5NH0.O2oSAmz19A5a2iz3mCYbuB-xsE3UeqR-G1cxdrqmkow&t=2024-06-09T16%3A33%3A14.309Z"
								>
									Download CV
								</Link>
							</Button>
						</div>
					</FadeInSection>
				</div>
			</div>
		</div>
	);
}
