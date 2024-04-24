const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.analyticsinsight.net",
				port: "",
			},
		],
	},
	// eslint: {
	// 	ignoreDuringBuilds: true,
	// },
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
