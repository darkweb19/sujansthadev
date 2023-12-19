import { inter } from "@/app/notes/layout";

interface ListStyleDashProps {
	lists: Array<string>;
}

export default function ListStyleDash({ lists }: ListStyleDashProps) {
	return (
		<ul
			className={`${inter.className} px-3 sm:px-4 mt-1 flex flex-col gap-1`}
		>
			{lists.map((item, index) => (
				<li key={index} className="flex gap-4 mt-2">
					{" "}
					<span>-</span> {"   "}
					{item}
				</li>
			))}
		</ul>
	);
}
