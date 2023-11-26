import Image from "next/image";
import mine from "../../public/assets/logo.png";
import Link from "next/link";
import { ubuntu } from "@/app/notes/layout";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";

export default function NavBar() {
	return (
		<Navbar isBordered>
			<NavbarBrand>
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
					<Link href="/">/Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className={ubuntu.className} href="#">
						/Blog
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link className={ubuntu.className} href="/notes">
						/Notes
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex text-2xl">
					<Link href="https://github.com/darkweb19">
						<FaGithub />
					</Link>
				</NavbarItem>
				<NavbarItem className="text-2xl">
					<Link href="https://www.linkedin.com/in/sujan-shrestha3220/">
						<FaLinkedin />
					</Link>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
