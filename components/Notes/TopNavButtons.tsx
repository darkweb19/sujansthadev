import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function TopNavButtons({
	prevLink,
	nextLink,
}: {
	prevLink: string;
	nextLink: string;
}) {
	return (
		<div className="border flex px-4 justify-between items-center">
			<Link href={prevLink}>
				<Button radius="sm" color="primary">
					Prev
				</Button>
			</Link>

			<Link href={nextLink}>
				<Button radius="sm" color="primary">
					Next
				</Button>
			</Link>
		</div>
	);
}
