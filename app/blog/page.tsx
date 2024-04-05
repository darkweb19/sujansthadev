import { Divider } from "@nextui-org/react";
import { lato } from "../fonts";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
	return (
		<main
			className={`${lato.className} h-screen gap-3 p-3 text-xl items-center`}
		>
			<div className="p-2 text-center mt-10 md:mt-28">
				<h1 className="text-4xl md:text-5xl">Welcome to my Blog</h1>
				<p className="text-center text-lg mt-3">
					- I discuss my personal thoughts on various topics.
				</p>
			</div>
			<Divider className="mt-10" />
			<h1 className="mt-5 md:p-2 text-2xl md:text-3xl text-center">
				Popular Blogs
			</h1>
			<div className="flex justify-center mt-4">
				<div className="w-full md:w-fit p-1 md:p-3">
					<Link
						href={"/blog/ai-in-tech"}
						className="block border border-gray-500 p-1 md:p-3 rounded-lg overflow-hidden"
					>
						<div className="flex items-center ">
							<div className="w-96 md:w-auto mr-4">
								<Image
									className="rounded-xl"
									alt="mahe"
									width={180}
									height={150}
									layout="responsive"
									objectFit="cover"
									src="https://www.analyticsinsight.net/wp-content/uploads/2024/03/AI-Engineer-Vs-Software-Engineer-Career-Guide-for-2024.jpg"
								/>
							</div>
							<div className="flex flex-col gap-2 md:gap-5 justify-center ml-4">
								<span className="flex gap-3 justify-between w-full text-sm">
									<h4>March 19, 2024</h4>
									<h3>8 min</h3>
								</span>
								<h2 className="text-lg md:text-xl">
									AI impact in Tech: Perspectives and
									Predictions!!
								</h2>
								<p className="text-xs md:text-sm">
									- Sujan Shrestha
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
