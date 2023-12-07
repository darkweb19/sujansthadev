import { FaGithub } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";
import Link from "next/link";

export default function SocialLinks() {
	return (
		<div className="sm:mt-4">
			<ul className=" p-1 text-2xl h-fit flex gap-2 items-center justify-center">
				<li className="cursor-pointer  hover:text-slate-600 hover:scale-125 duration-150">
					<Link href="https://github.com/darkweb19" target="__blank">
						<FaGithub />
					</Link>
				</li>
				<li className="cursor-pointer hover:text-slate-600 hover:scale-125 duration-150">
					<Link
						href="https://www.instagram.com/sujansthaa/"
						target="__blank"
					>
						<BsInstagram />
					</Link>
				</li>
				<li className="cursor-pointer hover:text-slate-600 hover:scale-125 hidden sm:block duration-150">
					<Link
						href="https://linktr.ee/sujansthadev"
						target="__blank"
					>
						<SiLinktree />
					</Link>
				</li>

				<li className="cursor-pointer hover:text-slate-600 hover:scale-125 block sm:hidden duration-150">
					<Link href="/notes" className="">
						<FaNoteSticky />
					</Link>
				</li>
			</ul>
		</div>
	);
}
