import Typing from "./Typing";

export default function HomePage() {
	return (
		<div className=" flex items-center w-full h-full">
			<div className=" flex flex-col justify-center  items-center h-2/4 ">
				<div className=" w-4/5 ">
					<p className="text-3xl sm:text-5xl text-start font-bold gradient-text ">
						HELLO WORLD
					</p>
					<div className="flex  sm:p-1 text-2xl sm:text-3xl font-semibold text-slate-600">
						<Typing />
					</div>
					<div className=" p-1  w-4/5 text-slate-800">
						<p className="text-justify font-medium text-base sm:text-lg">
							I am a Software Engineer and a student from Nepal. I
							have a keen interest in Full-Stack Development,
							Artificial Intelligence, IOT and everything in
							between
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
