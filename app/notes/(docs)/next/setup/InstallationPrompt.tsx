import { inter, ubuntu } from "@/app/notes/layout";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";

export default function InstallationPrompt() {
	return (
		<>
			<h2
				className={`${ubuntu.className} text-xl mt-2 font-medium text-slate-black`}
			>
				On installation, you'll see the following prompts:
			</h2>
			<Snippet className="bg-slate-black mt-1 text-light-white">
				<span>What is your project named? my-app</span>
				<span>Would you like to use TypeScript? No / Yes</span>
				<span>Would you like to use ESLint? No / Yes</span>
				<span>Would you like to use Tailwind CSS? No / Yes</span>
				<span>Would you like to use `src/` directory? No / Yes</span>
				<span>
					Would you like to use App Router? (recommended) No / Yes
				</span>
				<span>
					Would you like to customize the default import alias (@/*)?
					No / Yes
				</span>
				<span>What import alias would you like configured? @/*</span>
			</Snippet>

			<p className={`${inter.className} text-lg mt-1 text-justify`}>
				After the prompts,{" "}
				<Code className="bg-slate-black text-slate-white">
					`create-next-app`
				</Code>{" "}
				will create a folder with your project name and install the
				required dependencies.
			</p>
		</>
	);
}
