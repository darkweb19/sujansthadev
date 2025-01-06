"use client";
import { BiCopyright } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Copyrights() {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<footer className="mt-0 p-3 flex flex-col items-center justify-center text-sm font-medium dark:text-slate-200 light:text-slate-700">
			<p>Made with Next Js by Sujan Shrestha</p>
			<p className="flex items-center gap-1">
				All Rights Reserved.{` ${year}`}
				<span className="text-base font-bold">
					<BiCopyright />
				</span>
			</p>
		</footer>
	);
}
