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
import { usePathname } from "next/navigation";
import {
	introLink,
	reactLinksHooks,
	reactLinks,
} from "@/app/notes/(docs)/react/Links";

const menuItems = [
	{ title: "/Home", link: "/" },
	{ title: "/Blog", link: "#" },
	{ title: "/Notes", link: "/notes" },
];

const allReactLinks = [
	{ links: introLink.link, link_title: "React Introduction" },
	...reactLinks,
	...reactLinksHooks,
];

export default function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<Navbar
			shouldHideOnScroll
			onMenuOpenChange={setMenuOpen}
			isMenuOpen={isMenuOpen}
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
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
				{!pathname.startsWith("/notes") &&
					!pathname.startsWith("/convert") && (
						<>
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
						</>
					)}

				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="/blog"
					>
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
				<NavbarItem>
					<Link
						className={`${ubuntu.className} text-lg`}
						href="/convert"
					>
						/convert
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

				{/* this is for menu items  */}
				<NavbarMenu>
					{menuItems.map((item, index) => (
						<>
							<NavbarMenuItem key={`${item}-${index}`}>
								<Link
									onClick={() => setMenuOpen(false)}
									className={`${ubuntu.className} w-full`}
									href={item.link}
								>
									{item.title}
								</Link>
							</NavbarMenuItem>
						</>
					))}

					{/* for react s */}
					{pathname.startsWith("/notes/react") &&
						allReactLinks.map((alLinks, index) => (
							<NavbarMenuItem key={index}>
								<Link
									onClick={() => setMenuOpen(false)}
									className={`${ubuntu.className} w-full`}
									href={alLinks.links}
								>
									/{alLinks.link_title}
								</Link>
							</NavbarMenuItem>
						))}
				</NavbarMenu>
			</NavbarContent>
		</Navbar>
	);
}
