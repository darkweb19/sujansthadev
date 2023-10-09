import Typing from "./Typing";

export default function HomePage() {
	return (
		<div className=" flex items-center h-full">
			<div className=" flex flex-col justify-center  items-center h-2/4 ">
				<div className=" w-3/5 ">
					<p className="text-5xl text-start font-bold gradient-text ">
						HELLO WORLD
					</p>
					<div className="flex  p-1  text-3xl font-semibold text-slate-600">
						<Typing />
					</div>
					<div className=" p-1  w-4/5 text-slate-700">
						<p className="text-justify font-medium text-lg">
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
