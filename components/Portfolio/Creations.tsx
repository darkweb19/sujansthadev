import { HoverEffect } from "../ui/card-hover-effect";

export default function Creations() {
	const data = [
		{
			title: "Finance Wanabee",
			content:
				"A Finance Management system that basically keeps track of your expenses and provide basic functionality for managing your finances.",
			techStack: ["Next", "Prisma", "PostgreSQL", "TypeScript"],
			links: {
				github: "https://github.com/darkweb19/next-auth-scratch",
				share: "https://finance.sujansthadev.com.np/",
			},
		},
		{
			title: "ChatGpt Web App",
			content:
				"A ChatGPT Clone App repository! This is a simplified version of the ChatGPT application  with a GPT-3.5 powered chatbot.",
			techStack: ["JavaScript, ", "NodeJs, ", "React"],
			links: {
				github: "https://github.com/darkweb19/ChatGpt-App",
				share: "",
			},
		},
		{
			title: "React-Portfolio",
			content: "Explore My React Portfolio made with plain react-app.",
			techStack: ["React JS"],
			links: {
				github: "https://github.com/darkweb19/react-portfolio",
				share: "https://darkweb19.github.io/react-portfolio/",
			},
		},
		{
			title: "Threads-Clone",
			content:
				"A frontend design of Threads made with Next Js, understanding a brief about App Router in Next JS 13v",
			techStack: ["Next JS v13 ,", "TypeScript"],
			links: {
				github: "https://github.com/darkweb19/threads-client",
				share: "",
			},
		},
		{
			title: "Threads-Backend",
			content:
				"The heart of Threads,  backend server. Crafted with Node.js, GraphQL, PostgreSQL, and Prisma, this is the backbone of the application. ",
			techStack: ["TypeScript, ", "Node, ", "GraphQL, ", "Prisma, "],
			links: {
				github: "https://github.com/darkweb19/threads-server",
				share: "",
			},
		},
		{
			title: "Discord-Bot-AI",
			content:
				"A Discord bot which generates human like text powered with OpenAi's ChatGpt 3.5 API",
			techStack: ["Node Js , ", "JavaScript"],
			links: {
				github: "https://github.com/darkweb19/discord-bot-chatgpt",
				share: "",
			},
		},
	];

	return (
		// card list
		<div className="h-fit w-full flex flex-wrap justify-evenly gap-3 p-3">
			<HoverEffect items={data} delay={100} />
		</div>
	);
}
