import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiLinktree } from "react-icons/si";

export default function SocialLinks() {
	return (
		<div className="sm:mt-4">
			<ul className=" p-1 text-2xl h-fit flex gap-2 items-center justify-center">
				<li className="cursor-pointer  hover:text-slate-600 hover:scale-125 duration-150">
					<a href="https://github.com/darkweb19" target="__blank">
						<FaGithub />
					</a>
				</li>
				<li className="cursor-pointer hover:text-slate-600 hover:scale-125 duration-150">
					<a
						href="https://www.instagram.com/sujansthaa/"
						target="__blank"
					>
						<BsInstagram />
					</a>
				</li>
				<li className="cursor-pointer hover:text-slate-600 hover:scale-125 duration-150">
					<a href="https://linktr.ee/sujansthadev" target="__blank">
						<SiLinktree />
					</a>
				</li>
			</ul>
		</div>
	);
}
