import Image from "next/image";
import mine from "../../public/assets/logo.png";
import Link from "next/link";
export default function Navbar() {
	return (
		<nav>
			<div className=" h-14 w-full rounded-sm flex items-center justify-around backdrop-blur-lg fixed top-0 left-0 z-10">
				<Image
					className="rounded-lg"
					src={mine}
					height="80"
					width="80"
					alt="logo"
				/>
				<ul className=" h-full flex items-center justify-evenly gap-2 font-medium w-3/6">
					<Link
						className="p-2 rounded-md hover:bg-red-300 duration-300"
						href="/"
					>
						Home
					</Link>

					<Link
						className="p-2 rounded-md hover:bg-red-300 duration-300"
						href="#"
					>
						Blog
					</Link>
					<Link
						className="p-2 rounded-md hover:bg-red-300 duration-300"
						href="#"
					>
						Blog
					</Link>
				</ul>
			</div>
		</nav>
	);
}
