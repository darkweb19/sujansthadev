import Link from "next/link";

export default function TopNavButtons({
	prevLink,
	nextLink,
	prevdisabled,
	nextdisabled,
}: {
	prevLink: string;
	nextLink: string;
	prevdisabled?: boolean;
	nextdisabled?: boolean;
}) {
	return (
		<div className="border flex px-4 justify-between items-center">
			<Link
				className={`${
					prevdisabled && "bg-[#7397E3]"
				} px-4 py-1 text-slate-white bg-[#0956EB] rounded-lg`}
				href={prevLink}
			>
				Prev
			</Link>

			<Link
				className={`${
					nextdisabled && "bg-[#7397E3]"
				} px-4 py-1 text-slate-white bg-[#0956EB] rounded-lg`}
				href={nextLink}
			>
				Next
			</Link>
		</div>
	);
}
