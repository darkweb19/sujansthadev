import { HoverEffect } from "../ui/card-hover-effect";
import { projects as data } from "@/data/Projects";

export default function Creations() {
	return (
		// card list
		<div className="h-fit w-full flex flex-wrap justify-evenly gap-3 p-3">
			<HoverEffect items={data} delay={100} />
		</div>
	);
}
