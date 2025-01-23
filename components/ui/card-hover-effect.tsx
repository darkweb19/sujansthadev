"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";
import Image from "next/image";
import FadeInSection from "../Portfolio/FadeInSection";
import browser from "@/public/assets/code.png";
import { PersonalProjects } from "@/types/PersonalProjects";

export const HoverEffect = ({
	items,
	delay,
	className,
}: {
	items: PersonalProjects[];
	delay: number;
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					href={item?.links.share}
					key={item?.links.share}
					className="relative group  block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-neutral-300 dark:bg-slate-800/[0.8] block  rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>

					<Card>
						<FadeInSection delay={delay * (idx + 5)}>
							<div className="w-fit h-fit dark:text-white light:text-neutral-950 text-2xl">
								{/* <FiCode /> */}
								<Image src={browser} alt="icon" height={"30"} />
							</div>
							<CardTitle>{item.title}</CardTitle>
							<CardDescription className="py-0 sm:py-1 h-[130px] md:h-[150px]">
								{item.content}
							</CardDescription>
							<div className="w-full h-fit py-1">
								<ul className="text-xs font-medium flex gap-2">
									{item.techStack.map((tech, i) => (
										<li key={i}>{tech}</li>
									))}
								</ul>
							</div>
							<LinksCard links={item.links}></LinksCard>
						</FadeInSection>
					</Card>
				</Link>
			))}
		</div>
	);
};

export const Card = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-80 md:w-full p-4 overflow-hidden bg-white dark:bg-black  border light:border-black dark:border-white/[0.2]   dark:group-hover:border-slate-700 relative z-20",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};
export const CardTitle = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<h4
			className={cn(
				"dark:text-zinc-100 light:text-slate-black font-bold tracking-wide mt-4",
				className
			)}
		>
			{children}
		</h4>
	);
};
export const CardDescription = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

export const LinksCard = ({
	links: { github, share },
}: {
	links: { github: string; share: string };
}) => {
	return (
		<div className="flex gap-4 w-full mt-1 h-fit md:mt-2 md:p-2 text-xl justify-start md:text-2xl">
			<Link href={github} className="hover:text-gray-600">
				<BsGithub />
			</Link>
			<Link href={share} className="hover:text-gray-600">
				<MdIosShare />
			</Link>
		</div>
	);
};
