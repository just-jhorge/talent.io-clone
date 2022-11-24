import { useState } from "react";
import TabItem from "../TabItem/TabItem";
import {
	tabOneList,
	tabTwoList,
	tabThreeList,
	tabFourList,
} from "../../data/data";

const Features = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const items = [
		{
			id: 1,
			content: (
				<TabItem
					header="Find a permanent job"
					buttonText="Get offers"
					list={tabOneList}
				/>
			),
		},
		{
			id: 2,
			content: (
				<TabItem
					header="Find a freelance project"
					buttonText="Join our community"
					list={tabTwoList}
				/>
			),
		},
		{
			id: 3,
			content: (
				<TabItem
					header="Find an internship or apprenticeship"
					buttonText="Get offers"
					list={tabThreeList}
				/>
			),
		},
		{
			id: 4,
			content: (
				<TabItem
					header="Find a remote job"
					buttonText="Go remote"
					list={tabFourList}
				/>
			),
		},
	];

	const buttons = [
		{ id: 0, name: "Permanent job" },
		{ id: 1, name: "Freelance job" },
		{ id: 2, name: "Internship / apprenticeship" },
		{ id: 3, name: "Remote job" },
	];

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	return (
		<section className="bg-veryDarkBlue w-full text-white py-24">
			<div className="container flex flex-col items-center justify-center">
				<div className="text-center">
					<p className="text-4xl leading-snug mb-10">
						talent.io is the simplest way to <br />
						<span className="text-mediumYellow">find your next tech role</span>
					</p>
					<div className="mb-14">
						<div className="flex items-center justify-center gap-5 mb-20">
							{buttons.map((button) => (
								<button
									key={button.id}
									className="tab-button"
									onClick={() => handleClick(button.id)}
								>
									{button.name}
								</button>
							))}
						</div>
						<div>{items[currentIndex].content}</div>
					</div>
					<p className="text-[3.5rem]">
						<span className="text-mediumYellow">
							6000+ tech talent found their job{" "}
						</span>
						on talent.io
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
