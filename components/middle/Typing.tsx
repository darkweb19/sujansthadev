"use client";
import Typewriter from "typewriter-effect";
export default function Typing() {
	return (
		<div className="text-2xl font-semibold text-slate-700">
			<Typewriter
				onInit={(typewriter) => {
					typewriter.typeString("Sujan here!").pauseFor(2500).start();
				}}
				options={{ loop: false }}
			/>
		</div>
	);
}
