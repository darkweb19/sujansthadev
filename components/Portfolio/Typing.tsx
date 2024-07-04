"use client";
import Typewriter from "typewriter-effect";
export default function Typing() {
	return (
		<Typewriter
			onInit={(typewriter) => {
				typewriter.typeString("Sujan here!").pauseFor(2500).start();
			}}
			options={{ loop: false }}
		/>
	);
}
