"use client";
import { ClipLoader } from "react-spinners";

export default function Loadings({ loading }: { loading: boolean }) {
	return (
		<div className=" h-screen w-screen flex  items-center justify-center ">
			<ClipLoader
				color={"#999EF0"}
				loading={loading}
				size={100}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
}
