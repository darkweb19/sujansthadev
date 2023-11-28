"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJsSquare,
	FaPython,
	FaReact,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandCpp, TbBrandCupra } from "react-icons/tb";

export const list = [
	{
		title: "React Js",
		icon: <FaReact />,
		link: "/react",
		price: ".jsx | .tsx",
	},
	{
		title: "HTML5",
		icon: <FaHtml5 />,
		link: "/html",
		price: ".html",
	},
	{
		title: "CSS3",
		icon: <FaCss3 />,
		link: "/css",
		price: ".css",
	},
	{
		title: "JavaScript",
		icon: <FaJsSquare />,
		link: "/js",
		price: ".js | .ts",
	},
	{
		title: "Next Js",
		icon: <SiNextdotjs />,
		link: "/next",
		price: ".jsx | .tsx",
	},
	{
		title: "Python",
		icon: <FaPython />,
		link: "/python",
		price: ".py",
	},
	{
		title: "C++",
		icon: <TbBrandCpp />,
		link: "/cpp",
		price: ".cpp",
	},
	{
		title: "git",
		icon: <FaGithub />,
		link: "/git",
		price: ".git",
	},
];

export default function CardsUi() {
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
