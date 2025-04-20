import { TechStack } from "@/types/TechStack";
import {
	TbBrandTypescript,
	TbBrandNextjs,
	TbBrandNodejs,
	TbBrandMongodb,
	TbBrandGraphql,
} from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaDocker, FaGithub, FaLinux } from "react-icons/fa";

export const techStacks: TechStack[] = [
	{ name: "Next JS ", icons: <TbBrandNextjs /> },
	{ name: "TypeScript", icons: <TbBrandTypescript /> },
	{ name: "React Js ", icons: <SiReact /> },
	{ name: "AWS", icons: <FaAws /> },
	{ name: "Docker", icons: <FaDocker /> },
	{ name: "NodeJs", icons: <TbBrandNodejs /> },
	{ name: "PostgreSQL", icons: <BiLogoPostgresql /> },
	{ name: "GitHub", icons: <FaGithub /> },
	{ name: "Linux", icons: <FaLinux /> },
	{ name: "MongoDb", icons: <TbBrandMongodb /> },
	{ name: "Graphql", icons: <TbBrandGraphql /> },
];
