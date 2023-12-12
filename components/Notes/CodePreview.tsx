"use client";
import { FaCircle } from "react-icons/fa";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import useCopy from "./Hooks/copyText";

interface codePreviewProps {
	code: string;
}

const CodePreview: React.FC<codePreviewProps> = ({ code }) => {
	const { copy, copyToClipboard } = useCopy();

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
				<button
					className="text-light-white text-sm relative right-2"
					onClick={() => copyToClipboard(code)}
				>
					{copy ? "copied" : "copy"}
				</button>
			</div>
			<SyntaxHighlighter
				language="javascript"
				style={coldarkDark}
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
