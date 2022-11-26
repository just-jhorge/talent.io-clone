import { useState } from "react";
import TestimonialItem from "../TestimonialItem/TestimonialItem";
import { TestimonialItems, testimonyPerson } from "../../data/data";

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<section className="container relative pt-44 pb-28">
			<div className="-full px-28 absolute -top-24 left-0 right-0 grid grid-cols-4 gap-5">
				{testimonyPerson.map((person) => (
					<div
						onClick={() => handleClick(person.id)}
						key={person.id}
						className={`flex flex-col items-start justify-between p-5 ${
							person.id == currentIndex
								? "bg-subtleBlue h-64 -translate-y-5"
								: "bg-subtleBlue/80 h-56"
						}  text-white rounded-lg cursor-pointer hover:bg-subtleBlue border border-gray-700 transition-all duration-200`}
					>
						<div className="w-full flex items-start justify-between">
							<p className="bg-white/30 px-1 text-xs uppercase">
								{person.type}
							</p>
							<img src={person.picture} className="h-14 w-14 rounded-full" />
						</div>
						<div className="w-full -translate-y-7">
							<p className="text-2xl">{person.name}</p>
							<p className="text-sm">{person.role}</p>
						</div>
						<div className="w-full">
							<img src={person.logo} className="h-4" alt="" />
						</div>
					</div>
				))}
			</div>
			<div>
				<TestimonialItem
					quote={TestimonialItems[currentIndex].quote}
					name={TestimonialItems[currentIndex].name}
					role={TestimonialItems[currentIndex].role}
					logo={TestimonialItems[currentIndex].logo}
					offers={TestimonialItems[currentIndex].offers}
					daysHired={TestimonialItems[currentIndex].daysHired}
				/>
			</div>
		</section>
	);
};

export default Testimonials;
