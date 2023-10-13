import FadeInSection from "@/components/middle/FadeInSection";
import Link from "next/link";

export default function Navigations() {
	return (
		<div className="hidden sm:p-1 sm:block mb-3">
			<ul className="flex flex-col text-black-500 text-xs sm:text-lg font-medium ">
				<FadeInSection delay={1200}>
					<li className="cursor-pointer hover:text-gray-500">
						<Link href="#about">/about</Link>
					</li>
				</FadeInSection>
				<FadeInSection delay={1500}>
					<li className="cursor-pointer hover:text-gray-500">
						{" "}
						<Link href="#creation">/creation</Link>
					</li>
				</FadeInSection>
				<FadeInSection delay={1700}>
					<li className="cursor-pointer hover:text-gray-500">
						<Link href="#creation">/academics</Link>
					</li>
				</FadeInSection>
			</ul>
		</div>
	);
}
