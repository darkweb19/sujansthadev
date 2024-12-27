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
				<div className="w-[96%] md:w-4/5 flex flex-col justify-center items-start">
					<FadeInSection delay={200}>
						<p
							className={`${lilitaFont.className} text-6xl p-1 sm:text-5xl gradient-text`}
						>
							HELLO WORLD
						</p>
					</FadeInSection>
					<FadeInSection delay={500}>
						<div
							style={{ letterSpacing: "2px" }}
							className={`${ubuntu.className} text-shadow sm:mt-4 flex text-center p-2 sm:p-1 text-2xl sm:text-5xl font-semibold dark:text-slate-white light:text-slate-600`}
						>
							<Typing />
						</div>
					</FadeInSection>
					<FadeInSection delay={700}>
						<div className="text-shadow p-2  w-[100%] sm:mt-3  dark:text-slate-200 light:text-slate-800">
							<p
								style={{ letterSpacing: "1px" }}
								className={` font-normal text-base sm:text-4xl`}
							>
								I am a Software Engineer and passionate about
								creating beautiful products that{" "}
								<span className="text-shadow2 empowercss">
									Empower People.
								</span>
							</p>
						</div>
					</FadeInSection>

					{/* gmail animation  */}
					<FadeInSection delay={900}>
						<div className="h-fit flex md:mt-6 items-center">
							<div className="gmail w-[15%] sm:w-[11%]">
								<Lottie
									animationData={gmailData}
									onClick={() => changeMailIcon()}
								/>
							</div>

							<Button className="relative left-10 font-medium bg-gradient-to-tr from-pink-500 text-slate-white to-yellow-500 shadow-lg">
								<Link
									target="_blank"
									href={
										"https://sujansthadev-resume2.s3.us-east-1.amazonaws.com/Sujan+Shresth+dev.pdf"
									}
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
