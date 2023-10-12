"use client";
import React from "react";
import Loadings from "@/components/Loadings";
import { useEffect, useState } from "react";

export default function LandingPage({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 900);
	}, []);

	return (
		<>
			{loading && <Loadings loading={loading} />}
			<div>{children}</div>
		</>
	);
}
