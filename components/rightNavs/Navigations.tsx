import FadeInSection from "../middle/FadeInSection";

export default function Navigations() {
	return (
		<div className="hidden sm:p-1 sm:block mb-3">
			<ul className="flex flex-col text-black-500 text-xs sm:text-lg font-medium ">
				<FadeInSection delay={700}>
					<li className="cursor-pointer">/experience</li>
				</FadeInSection>
				<FadeInSection delay={800}>
					<li className="cursor-pointer">/creations</li>
				</FadeInSection>
				<FadeInSection delay={900}>
					<li className="cursor-pointer">/education</li>
				</FadeInSection>
			</ul>
		</div>
	);
}
