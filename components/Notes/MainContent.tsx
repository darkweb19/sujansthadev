import { lilitaFont, ubuntu, inter } from "@/app/fonts";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface MainContentProps {
	heading: string;
	contentHeading: string;
	mainDefinition?: string;
	children: React.ReactNode;
	logo?: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({
	heading,
	contentHeading,
	mainDefinition,
	children,
	logo,
}) => {
	return (
		<div className=" w-full">
			<div>
				<div
					className={`${lilitaFont.className} flex items-center gap-2`}
				>
					<h1 className="text-4xl pt-5 dark:text-slate-200 light:text-gray-700">
						{heading}
					</h1>
					<span className="text-4xl">{logo}</span>
				</div>
				<div className="p-2 pl-3 sm:pr-10">
					<h1
						className={`${ubuntu.className} text-3xl font-medium dark:text-slate-200 light:text-slate-black`}
					>
						{contentHeading}
					</h1>
					{mainDefinition && (
						<p
							className={`${inter.className} flex mt-2 text-justify px-1`}
						>
							<span className=" py-1 h-fit text-xl">
								<IoIosArrowDroprightCircle />
							</span>
							{mainDefinition}
						</p>
					)}
					<div>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
