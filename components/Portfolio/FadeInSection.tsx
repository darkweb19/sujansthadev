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
			className={`fade-in-section h-fit ${isVisible && "is-visible"}`}
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}
