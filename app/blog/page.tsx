import { Divider } from "@nextui-org/react";
import { lato } from "../fonts";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
	return (
		<main
			className={`${lato.className} h-screen gap-3 p-3 text-2xl items-center `}
		>
			<div className="p-2 text-center mt-28">
				<h1 className="text-5xl">Welcome to my Blog</h1>
				<p className="text-center text-lg mt-3">
					- I discuss my personal thoughts on various topic.
				</p>
			</div>
			<Divider className="mt-10" />
			<h1 className=" mt-2 p-2 text-3xl text-center">Popular Blogs</h1>
			<div className=" flex justify-center">
				<div className=" w-3/4 p-3">
					<Link
						href={"/blog/ai-in-tech"}
						className="flex justify-evenly border py-4 rounded-lg border-gray-500"
					>
						<Image
							className="rounded-xl"
							alt="mahe"
							width={250}
							height={200}
							src="https://www.analyticsinsight.net/wp-content/uploads/2024/03/AI-Engineer-Vs-Software-Engineer-Career-Guide-for-2024.jpg"
						/>
						<div className=" w-2/4 flex flex-col gap-1 justify-center items-start">
							<span className="flex gap-3 justify-between w-full">
								<h4 className="text-base ml-2">
									March 19 , 2024
								</h4>
								<h3 className="text-base ml-7">8 min </h3>
							</span>
							<h1>
								AI impact in Tech : Perspectives and Predictions
								!!
							</h1>
							<p className="text-sm ml-1">- Sujan Shrestha</p>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
