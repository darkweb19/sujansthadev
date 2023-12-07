import { BiCopyright } from "react-icons/bi";

export default function Copyrights() {
	const date = new Date();
	return (
		<footer className=" mt-0 p-3 flex flex-col items-center justify-center text-sm font-medium text-slate-700">
			<p>Made with Next Js by Sujan Shrestha </p>
			<p className="flex items-center gap-1">
				All Rights Reserved.{`${" "} ${date.getFullYear()}`}
				<p className="text-base font-bold">
					{" "}
					<BiCopyright />{" "}
				</p>
			</p>
		</footer>
	);
}
