"use client";
import { FaCircle } from "react-icons/fa";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import useCopy from "./Hooks/copyText";

interface codePreviewProps {
	code: string;
	file?: string;
	lines?: number[];
	redLines?: number[];
}

const CodePreview: React.FC<codePreviewProps> = ({
	code,
	lines,
	redLines,
	file,
}) => {
	const { copy, copyToClipboard } = useCopy();
	const ADDED = lines;
	const REMOVED = redLines;

	return (
		<div className="text-xl rounded-lg  h-fit w-full bg-[#171717]">
			<div className="text-xs flex relative top-3 left-1 justify-between items-center  m-1">
				<div className=" flex justify-center  gap-1">
					<span className="text-[#FE5F57]">
						<FaCircle />
					</span>
					<span className="text-[#FEBC2E]">
						<FaCircle />
					</span>
					<span className="text-[#28C840]">
						<FaCircle />
					</span>
				</div>
				<div className="w-full px-2 flex justify-between items-center">
					<span className="text-slate-300 text-base ">
						{file ? `app/${file}.tsx` : "app/page.tsx"}
					</span>
					<button
						className="text-light-white text-sm relative right-2"
						onClick={() => copyToClipboard(code)}
					>
						{copy ? "copied" : "copy"}
					</button>
				</div>
			</div>
			<SyntaxHighlighter
				language="javascript"
				style={coldarkDark}
				showLineNumbers
				wrapLines={true}
				lineProps={(lineNumber) => {
					let style: React.CSSProperties = { display: "block" };
					if (ADDED?.includes(lineNumber)) {
						style.backgroundColor = "#155526";
					} else if (REMOVED?.includes(lineNumber)) {
						style.backgroundColor = "#250811";
					}
					return { style };
				}}
				customStyle={{
					width: "100%",
					borderRadius: "10px",
					paddingLeft: "10px",
					paddingBottom: "20px",
					marginBottom: "0px",
					background: "#171717",
					fontSize: "16px",
					lineHeight: "22px",
					overflow: "auto",
				}}
			>
				{code}
			</SyntaxHighlighter>
		</div>
	);
};

export default CodePreview;
