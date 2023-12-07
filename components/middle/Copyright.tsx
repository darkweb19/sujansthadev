import { BiCopyright } from "react-icons/bi";
import FadeInSection from "./FadeInSection";

export default function Copyrights() {
	const date = new Date();
	return (
		<FadeInSection delay={900}>
			<div className=" p-2 mt-0  flex flex-col items-center justify-center gap-1 text-sm font-medium text-slate-700">
				<p>Made with Next Js by Sujan Shrestha </p>
				<p className="flex items-center gap-1">
					All Rights Reserved.{`${" "} ${date.getFullYear()}`}
					<p className="text-base font-bold">
						{" "}
						<BiCopyright />{" "}
					</p>
				</p>
			</div>
		</FadeInSection>
	);
}
