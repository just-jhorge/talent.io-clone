import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { companyTestimony } from "../../data/data";
import founders from "../../assets/founders.svg";
import ekimetrics from "../../assets/ekimetrics.svg";
import gitguardian from "../../assets/gitguardian.svg";
import leboncoin from "../../assets/leboncoin.svg";
import citio from "../../assets/citio.svg";
import meilleurs from "../../assets/meilleurs-agents.svg";
import { AnimatePresence, motion } from "framer-motion";

const companyIcons = [
	founders,
	ekimetrics,
	gitguardian,
	leboncoin,
	citio,
	meilleurs,
];

const changeVariants = {
	from: { opacity: 0 },
	to: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 1.3 },
};

const Companies = () => {
	let [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		if (currentIndex == 5) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex == 0) {
			setCurrentIndex(5);
		} else {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<section className="container flex items-center justify-center py-24">
			<div className="w-full flex flex-col items-center justify-center gap-20">
				<div>
					<h2 className="text-5xl text-subtleBlue font-light">
						7000+ tech companies are hiring on{" "}
						<span className="text-veryDarkBlue">talent.io</span>
					</h2>
				</div>
				<div className="w-full flex items-center justify-between gap-5">
					{companyIcons.map((icon) => (
						<img key={icon} src={icon} className="h-5" alt="Company Logo" />
					))}
				</div>
				<div className="relative h-72 w-3/4 shadow rounded-2xl p-5">
					<div
						onClick={prevSlide}
						className="absolute -left-5 top-[40%] cursor-pointer h-8 w-10 rounded-md bg-deepYellow flex items-center justify-center"
					>
						<AiOutlineArrowLeft className="text-xl" />
					</div>
					<div className="h-full flex items-start justify-center gap-5">
						<div className="h-full w-2/3 pl-5 flex flex-col items-start justify-between">
							<q className="text-[1.9rem] text-mediumDarkBlue font-light">
								{companyTestimony[currentIndex].quote}
							</q>
							<div className="text-sm border-l-2 border-deepYellow pl-8">
								<p>{companyTestimony[currentIndex].name}</p>
								<p>{companyTestimony[currentIndex].role}</p>
								<p>{companyTestimony[currentIndex].company}</p>
							</div>
						</div>
						<div className="h-full w-1/3">
							<img
								src={companyTestimony[currentIndex].imgSrc}
								className="h-full w-full rounded-2xl"
								alt="Some Picture"
							/>
						</div>
					</div>
					<div
						onClick={nextSlide}
						className="absolute -right-5 top-[40%] cursor-pointer h-8 w-10 rounded-md bg-deepYellow flex items-center justify-center"
					>
						<AiOutlineArrowRight className="text-xl" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Companies;
