const TestimonialItem = ({ quote, name, role, logo, offers, daysHired }) => {
	return (
		<div className="h-auto flex items-start justify-center px-10 border-l-2 border-deepYellow gap-20">
			<div className="w-[65%] h-full flex flex-col items-start justify-start gap-5">
				<q className="leading-relaxed text-2xl">{quote}</q>
				<div>
					<p className="text-md">
						{name}, <span className="font-semibold">{role}</span>
					</p>
				</div>
				<div>
					<img src={logo} className="h-5" />
				</div>
			</div>
			<div className="w-[35%] h-full flex flex-col items-start justify-between pb-20">
				<div className="mb-16">
					<p className="uppercase text-sm">offers received</p>
					<p className="text-veryDarkBlue text-4xl">{offers}</p>
				</div>
				<div>
					<p className="uppercase text-sm">hired in</p>
					<p className="text-veryDarkBlue text-4xl">{daysHired}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialItem;
