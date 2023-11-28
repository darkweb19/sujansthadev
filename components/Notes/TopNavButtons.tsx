import { Button } from "@nextui-org/button";
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
			<Link href={prevLink}>
				<Button isDisabled={prevdisabled} radius="sm" color="primary">
					Prev
				</Button>
			</Link>

			<Link href={nextLink}>
				<Button isDisabled={nextdisabled} radius="sm" color="primary">
					Next
				</Button>
			</Link>
		</div>
	);
}
