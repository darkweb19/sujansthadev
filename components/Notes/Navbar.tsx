"use client";
import Image from "next/image";
import mine from "../../public/assets/logo.png";
import Link from "next/link";
import { ubuntu } from "@/app/notes/layout";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";

const menuItems = [
	{ title: "/Home", link: "/" },
	{ title: "/Blog", link: "#" },
	{ title: "/Notes", link: "/notes" },
];

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<Navbar shouldHideOnScroll onMenuOpenChange={setMenuOpen}>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarBrand>
				{" "}
				<Image
					className="rounded-lg"
					src={mine}
					height="80"
					width="80"
					alt="logo"
				/>
			</NavbarBrand>
			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarItem className={ubuntu.className}>
					<Link className={`${ubuntu.className} text-lg`} href="/">
						/home
					</Link>
				</NavbarItem>

				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="#statement"
					>
						/statement
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="#creations"
					>
						/creations
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="#academics"
					>
						/academics
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className={`${ubuntu.className} text-lg`} href="#">
						/blog
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="/notes"
					>
						/notes
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="lg:flex text-2xl">
					<Link href="https://github.com/darkweb19" target="_blank">
						<FaGithub />
					</Link>
				</NavbarItem>
				<NavbarItem className="text-2xl">
					<Link
						href="https://www.linkedin.com/in/sujan-shrestha3220/"
						target="_blank"
					>
						<FaLinkedin />
					</Link>
				</NavbarItem>
				<NavbarItem className="text-2xl">
					<Link href="https://linktr.ee/sujansthadev" target="_blank">
						<SiLinktree />
					</Link>
				</NavbarItem>
				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								className={`${ubuntu.className} w-full`}
								href={item.link}
							>
								{item.title}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</NavbarContent>
		</Navbar>
	);
}
