"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";

import useCopy from "@/components/Notes/Hooks/copyText";
import { FaCircle } from "react-icons/fa";
import DangerNote from "@/components/Notes/DangerNote";
import { inter, lilitaFont, playpenSans } from "../fonts";

export default function Conversions() {
	const [red, setRed] = useState<number>(255);
	const [green, setGreen] = useState<number>(255);
	const [blue, setBlue] = useState<number>(255);
	const [hex, setHex] = useState<string | null>(null);
	const [error, setError] = useState<null | boolean>(null);

	const { copy, copyToClipboard } = useCopy();

	function rgbToHex(r: number, g: number, b: number) {
		if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
			console.error(
				"Invalid RGB values. Each value should be between 0 and 255."
			);

			setError(true);
			return null; // Return null or any other indicator of an error
		}

		const toHex = (c: number): string => {
			const hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		};

		const red = toHex(r);
		const green = toHex(g);
		const blue = toHex(b);

		return `#${red}${green}${blue}`;
	}

	function handleReset() {
		setHex(null);
		setRed(255);
		setGreen(255);
		setError(false);
		setBlue(255);
	}

	function generateRGB(r: number, g: number, b: number) {
		const hexColor = rgbToHex(r, g, b);
		setHex(hexColor);
	}

	return (
		<main className="h-[87dvh] w-full sm:h-[82dvh]  flex justify-center items-center">
			<div className="border rounded-md shadow-2xl bg-slate-white p-2 sm:p-5 ">
				<h1
					className={`${lilitaFont.className} text-4xl text-center text-slate-700 `}
				>
					RBG to HEX
				</h1>

				<div className="">
					<div className="border border-slate-500 flex gap-2 p-3 rounded-lg flex-wrap justify-center sm:justify-start">
						<div className=" flex gap-1 items-center">
							<span className="text-red-600 ">
								<FaCircle />
							</span>
							<input
								className="border border-gray-400 rounded-md p-1"
								type="text"
								value={red}
								placeholder="255"
								onClick={() => setRed(0)}
								onChange={(e) =>
									setRed(parseInt(e.target.value))
								}
							/>
						</div>
						<div className="flex gap-1 items-center">
							<span className="text-green-600 ">
								<FaCircle />
							</span>
							<input
								className="border border-gray-400  p-1 rounded-md"
								type="text"
								placeholder="255"
								onClick={() => setGreen(0)}
								value={green}
								onChange={(e) =>
									setGreen(parseInt(e.target.value))
								}
							/>
						</div>
						<div className="flex gap-1 items-center">
							<span className="text-blue-600 ">
								<FaCircle />
							</span>
							<input
								className="border border-gray-400  p-1 rounded-md"
								type="text"
								value={blue}
								onClick={() => setBlue(0)}
								placeholder="255"
								onChange={(e) =>
									setBlue(parseInt(e.target.value))
								}
							/>
						</div>
					</div>
				</div>
				{red !== 0 && hex && (
					<>
						<div className="flex justify-center items-center my-2 gap-5 px-7">
							<span className="text-red-600 flex items-center gap-1">
								<FaCircle />: {red}
							</span>
							<span className="text-green-600 flex items-center gap-1">
								<FaCircle />: {green}
							</span>
							<span className="text-blue-600 flex items-center gap-1">
								<FaCircle />: {blue}
							</span>
						</div>
						<div
							className={`${playpenSans.className} w-full text-center m-2 font-medium`}
						>
							Converts to :
						</div>
					</>
				)}
				<div className="flex gap-3 sm:gap-8 flex-wrap m-2 justify-around items-center">
					{red == 255 && green == 255 && blue == 255 ? (
						<Button
							radius="full"
							className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
							disabled
							onClick={() => generateRGB(red, green, blue)}
						>
							Please Enter a value!
						</Button>
					) : (
						<Button
							className={`${inter.className} font-medium ${
								(hex != null || error) && "hidden"
							}`}
							color="primary"
							onClick={() => generateRGB(red, green, blue)}
						>
							Convert To hex
						</Button>
					)}

					{/* when rgb values are invalid  */}
					{error && (
						<>
							<DangerNote content="Values Must be from 0 to 255 !!!" />
							<Button
								className={`${inter.className} font-medium `}
								color="primary"
								onClick={() => handleReset()}
							>
								Reset
							</Button>
						</>
					)}

					{/* this is for reset  */}
					{hex != null && (
						<Button
							className={`${inter.className} font-medium `}
							color="primary"
							onClick={() => handleReset()}
						>
							Reset
						</Button>
					)}

					{/* this is for copying  */}
					<div
						className={`border border-slate-400 flex items-center gap-3  p-3 rounded-lg bg-white ${
							hex == null && "hidden"
						}`}
					>
						<p
							className={`${inter.className} font-medium text-xl  dark:text-slate-800`}
						>
							{" "}
							{hex}{" "}
						</p>
						{hex && (
							<Button onClick={() => copyToClipboard(hex)}>
								{copy ? "copied!!" : "Copy"}
							</Button>
						)}
					</div>

					{/* this is preview  */}
					{hex && (
						<div
							className="h-16 w-36 sm:w-24 rounded-xl p-2 m-1"
							style={{ backgroundColor: hex }}
						></div>
					)}
				</div>
			</div>
		</main>
	);
}
