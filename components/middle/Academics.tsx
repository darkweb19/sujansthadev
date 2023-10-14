import FadeInSection from "./FadeInSection";

export default function Acamdemics() {
	return (
		<div className="w-full h-fit p-3 mt-3">
			<FadeInSection delay={300}>
				<div className="flex flex-grow gap-2 justify-center items-center p-1 mt-5">
					<div className="w-1/4 h-full flex justify-start items-start text-base font-medium text-slate-800">
						March 2006 - April 2018
					</div>
					<div className="w-3/4 h-full border-l-2 border-red-500 px-4 py-2 ">
						<h1 className="text-start text-xl px-2 font-medium text-slate-700">
							Primary Schooling
						</h1>
						<h4 className="text-sm px-2 py-1 italic font-medium">
							Little Flower Sec School , Birgunj
						</h4>
						<p className="text-justify text-slate-700 text-base font-medium p-2">
							Successfully passed Secondary Education Examination
							SEE held by Ministry of Education , Nepal with Grade
							Point Average of 3.35.
						</p>
					</div>
				</div>
			</FadeInSection>

			<FadeInSection delay={600}>
				<div className="flex flex-grow gap-2 justify-center items-center p-2 mt-5">
					<div className="w-1/4 h-full flex justify-start items-center text-base font-medium text-slate-800">
						July 2018 - March 2020
					</div>
					<div className=" w-3/4 h-full border-l-2 border-red-500 px-4 py-2">
						<h1 className="text-start text-xl px-2 font-medium text-slate-700">
							Imtermediate in Science
						</h1>
						<h4 className="text-sm px-2 py-1 italic font-medium">
							Himalayan Pyramid Higher Seconday School , Birgunj
						</h4>
						<p className="text-justify text-slate-700 text-base font-medium p-2">
							Successfully passed Higher Secondary Education
							Examination held by NEB , Nepal with Grade Point
							Average of 3.19.
						</p>
					</div>
				</div>
			</FadeInSection>

			<FadeInSection delay={900}>
				<div className="   flex flex-grow gap-2 justify-center items-center p-2 mt-5">
					<div className="w-1/4 h-full flex justify-start items-center text-base font-medium text-slate-800">
						July 2020 - Current
					</div>
					<div className="w-3/4 h-full border-l-2 border-red-500 px-4 py-2">
						<h1 className="text-start text-xl px-2 font-medium text-slate-700">
							Bachelor&apos;s Degree
						</h1>
						<h4 className="text-sm px-2 py-1 italic font-medium">
							St Lawrence College , Kathmandu
						</h4>
						<p className="text-justify text-slate-700 text-base font-medium p-2">
							Currently I am studying my Bachelor&apos;s Degree in
							Computer Science and Infortmation Technology in
							Tribhuwan University.
						</p>
					</div>
				</div>
			</FadeInSection>
		</div>
	);
}
