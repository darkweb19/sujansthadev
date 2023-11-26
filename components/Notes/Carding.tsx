"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaCss3, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandCpp, TbBrandCupra } from "react-icons/tb";
export default function CardsUi() {
	const list = [
		{
			title: "React Js",
			icon: <FaReact />,
			link: "/docs/react",
			price: "$5.50",
		},
		{
			title: "HTML5",
			icon: <FaHtml5 />,
			link: "/docs/html",
			price: "$3.00",
		},
		{
			title: "CSS3",
			icon: <FaCss3 />,
			link: "/docs/css",
			price: "$10.00",
		},
		{
			title: "JavaScript",
			icon: <FaJsSquare />,
			link: "/docs/js",
			price: "$5.30",
		},
		{
			title: "Next Js",
			icon: <SiNextdotjs />,
			link: "/docs/next",
			price: "$15.70",
		},
		{
			title: "Python",
			icon: <FaPython />,
			link: "/docs/python",
			price: "$8.00",
		},
		{
			title: "C++",
			icon: <TbBrandCpp />,
			link: "/docs/cpp",
			price: "$7.50",
		},
		{
			title: "Watermelon",
			icon: <TbBrandCupra />,
			link: "/docs/react",
			price: "$12.20",
		},
	];
	return (
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-3">
			{list.map((item, index) => (
				<Link key={index} href={`notes${item.link}`}>
					<Card
						shadow="sm"
						key={index}
						isPressable
						className="w-full"
						onPress={() => redirect("/")}
					>
						<CardBody className="overflow-visible p-3 mt-2 flex items-center text-slate-black justify-center text-7xl h-28">
							{item.icon}
						</CardBody>
						<CardFooter className="text-small justify-between">
							<b>{item.title}</b>
							<p className="text-default-500">{item.price}</p>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}
