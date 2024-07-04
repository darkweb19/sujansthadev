import FadeInSection from "./FadeInSection";

export default function Academics() {
	//data variable
	const data = [
		{
			date: "March 2006 - April 2018",
			delay: 300,
			title: "Primary Schooling",
			schoolName: "Little Flower Secondary School , Birgunj",
			content:
				"Successfully passed Secondary Education Examination SEE held by Ministry of Education , Nepal with Grade Point Average of 3.35.",
		},
		{
			date: "July 2018 - March 2020",
			delay: 600,
			title: "Intermediate in Science",
			schoolName: "Himalayan Pyramid Higher Secondary School , Birgunj",
			content:
				"Successfully passed Higher Secondary Education Examination held by NEB , Nepal with Grade Point Average of 3.19.",
		},
		{
			date: "	July 2020 - Current",
			delay: 900,
			title: "Bachelor's Degree",
			schoolName: "St Lawrence College , Kathmandu",
			content:
				"Currently, I am studying Bachelor's Degree in Computer Science and Infortmation Technology (CSIT) in Tribhuwan University.",
		},
	];

	return (
		<div className="w-full h-fit mb-3 p-0 sm:p-3 sm:mt-3">
			{data.map((datas, i) => (
				<FadeInSection key={i} delay={datas.delay}>
					<div className="flex lg:w-5/6 flex-grow gap-2 justify-center border border-slate-400 rounded-md dark:bg-[#1D1D1D] light:bg-[#F7F9FA] shadow-2xl items-center p-3 sm:p-5 mt-10">
						<div className="w-1/4 h-full flex justify-start items-start text-base font-normal light:text-slate-800  dark:text-slate-200">
							{datas.date}
						</div>
						<div className="w-3/4 h-full rounded-md border-l-5 dark:bg-[#1D1D1D] light:bg-[#FFFFFF] border-[#FDB7B5] px-4 py-2 ">
							<h1 className="text-start text-xl px-2 font-medium dark:text-slate-200 light:text-slate-700">
								{datas.title}
							</h1>
							<h4 className="text-sm px-2 py-1 italic font-medium">
								{datas.schoolName}
							</h4>
							<p className="text-justify light:text-slate-700 dark:text-slate-300 text-base font-medium p-2">
								{datas.content}
							</p>
						</div>
					</div>
				</FadeInSection>
			))}
		</div>
	);
}
