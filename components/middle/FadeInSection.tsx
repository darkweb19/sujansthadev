"use client";
import { useState, useRef, useEffect } from "react";

export default function FadeInSection({
	children,
	delay,
}: {
	children: React.ReactNode;
	delay: number;
}) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	console.log(isVisible);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				setIsVisible(entry.isIntersecting);
			}
		});
		observer.observe(ref.current as Element);
	}, []);
	return (
		<div
			className={`w-fit fade-in-section ${isVisible ? "is-visible" : ""}`}
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}