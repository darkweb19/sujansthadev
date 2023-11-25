import chatgpt from "@/public/assets/chatgpt.png";
import Image from "next/image";
export default function Notes() {
	return (
		<div className="h-screen w-full  overflow-scroll scroll-smooth ">
			<div className="h-60  border mt-14 p-5 flex flex-col justify-center items-center">
				<h1 className="text-3xl text-gray-800">What is programming?</h1>
				<p className="border w-2/5 text-justify p-2 text-gray-800 text-lg font-normal">
					Well , in short , the process of building a piece of
					computer program to solve a specific or a set of problems.
				</p>
			</div>
			<div className="h-60 border">
				<h1>Learn web development with Notes</h1>
				<p>By Sujan Shrestha</p>
			</div>
		</div>
	);
}
