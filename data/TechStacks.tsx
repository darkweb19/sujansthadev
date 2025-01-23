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

export const techStacks: TechStack[] = [
	{ name: "Next JS ", icons: <TbBrandNextjs /> },
	{ name: "TypeScript", icons: <TbBrandTypescript /> },
	{ name: "React Js ", icons: <SiReact /> },
	{ name: "Node", icons: <TbBrandNodejs /> },
	{ name: "MongoDb", icons: <TbBrandMongodb /> },
	{ name: "Graphql", icons: <TbBrandGraphql /> },
	{ name: "PostgreSQL", icons: <BiLogoPostgresql /> },
];
