import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				"4xl": "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
				"5xl": "rgba(0, 0, 0, 0.45) -1rem 15px 20px -20px",
			},
			colors: {
				// custom: "#EEE4E1",
				"slate-black": "#333333",
				"slate-white": "#F2F2F2",
				"light-white": "#EEEEEE",
				"dark-green": "#6B654C",
				"light-green": "#8B8779",
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						background: "#EEE4E1",
					},
				},
				dark: {
					colors: {
						background: "#0A0A0A",
						// background: "#141414",
					}, // dark theme colors
				},
			},
		}),
		addVariablesForColors,
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
export default config;
