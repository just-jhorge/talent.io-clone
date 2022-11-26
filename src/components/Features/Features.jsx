import { useState } from "react";
import TabItem from "../TabItem/TabItem";
import {
	tabOneList,
	tabTwoList,
	tabThreeList,
	tabFourList,
} from "../../data/data";
import featuresFreelance from "../../assets/features-freelance.png";
import featuresInternship from "../../assets/features-internship.png";
import featuresPermanent from "../../assets/features-permanent-job.png";
import featuresRemote from "../../assets/features-remote.png";

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
					imgSrc={featuresPermanent}
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
					imgSrc={featuresFreelance}
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
					imgSrc={featuresInternship}
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
					imgSrc={featuresRemote}
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
		<section className="bg-veryDarkBlue w-full text-white pt-24 pb-36">
			<div className="container flex flex-col items-center justify-center">
				<div className="text-center">
					<p className="text-4xl leading-snug mb-10">
						talent.io is the simplest way to <br />
						<span className="text-mediumYellow">find your next tech role</span>
					</p>
					<div className="mb-20">
						<div className="flex items-center justify-center gap-5 mb-20">
							{buttons.map((button) => (
								<button
									key={button.id}
									className={`tab-button ${
										currentIndex == button.id
											? "bg-activeBlue"
											: "bg-white/10 border"
									}`}
									onClick={() => handleClick(button.id)}
								>
									{button.name}
								</button>
							))}
						</div>
						<div className="max-w-[938px] mx-auto text-sm">
							{items[currentIndex].content}
						</div>
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
