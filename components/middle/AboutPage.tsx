import Image from "next/image";
import mine from "@/public/assets/mine.jpeg";

export default function AboutPage() {
	return (
		<div className=" p-1 flex gap-1 items-center justify-around">
			<div className="h-3/4 w-3/6">
				<p className="p-3 font-medium text-justify">
					I have completed my bootcamp course in the MERN stack from{" "}
					<a
						className="font-semibold  text-blue-500 "
						href="https://deerwalk.edu.np/DWIT/"
					>
						{" "}
						Deerwalk Institute{" "}
					</a>{" "}
					. At the same time , I am pursuing by Bachelor's degree in
					Computer Science from St Lawrence College which is
					affiliated to{" "}
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
	);
}
