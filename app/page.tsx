"use client";
import LandingPage from "@/components/LandingPage";
import Loadings from "@/components/Loadings";
import { useEffect, useState } from "react";

export default function Homes() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 900);
	}, []);

	return (
		<div className="">
			{loading ? <Loadings loading={loading} /> : <LandingPage />}
		</div>
	);
}
