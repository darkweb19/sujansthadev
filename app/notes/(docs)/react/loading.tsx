import { Progress } from "@nextui-org/progress";

export default function loading() {
	return (
		<div className="h-screen w-full">
			<Progress
				size="sm"
				isIndeterminate
				color="warning"
				aria-label="Loading..."
				className="w-full"
			/>
		</div>
	);
}
