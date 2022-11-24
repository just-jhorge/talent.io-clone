import headerImage from "../../assets/header-bg-right.png";
import Button from "../Button/Button";

const listItemsOne = [
	{ id: 1, name: "Software Engineers" },
	{ id: 2, name: "Data Experts" },
	{ id: 3, name: "Product Managers" },
];

const listItemsTwo = [
	{ id: 4, name: "CTOs" },
	{ id: 5, name: "VPs of Engineering" },
	{ id: 6, name: "Devops" },
];

const Header = () => {
	return (
		<header className="pt-24 h-[82vh] overflow-y-hidden bg-gradient-to-r from-lightDarkBlue to-mediumDarkBlue text-white">
			<div className="container h-full flex items-center justify-center">
				<div className="flex-1 h-full flex flex-col items-start justify-start">
					<div className="pt-10 pb-24">
						<p className="text-6xl leading-tight mb-10">
							<span className="text-mediumYellow">Get the tech job</span> <br />{" "}
							you deserve
						</p>
						<div className="mb-10 flex items-center justify-start gap-4">
							<p className="bg-white/30 px-2 py-1">Permanent</p>
							<p className="bg-white/30 px-2 py-1">Freelance</p>
							<p className="bg-white/30 px-2 py-1">On-site</p>
							<p className="bg-white/30 px-2 py-1">Remote</p>
						</div>
						<Button
							text="Find your next job"
							type="primary"
							fontSize="md font-semibold"
						/>
					</div>
					<div className="px-5 border-l-2 border-white flex flex-col items-start justify-start gap-5">
						<p className="uppercase text-sm text-deepYellow">supported roles</p>
						<div className="flex flex-col gap-1">
							<div className="flex text-sm">
								{listItemsOne.map((item) => (
									<div
										key={item.id}
										className="pr-5 pl-5 first:pl-0 border-r last:border-r-0 border-deepYellow"
									>
										{item.name}
									</div>
								))}
							</div>
							<div className="flex text-sm">
								{listItemsTwo.map((item) => (
									<div
										key={item.id}
										className="pr-5 pl-5 first:pl-0 border-r last:border-r-0 border-deepYellow"
									>
										{item.name}
									</div>
								))}
							</div>
						</div>
						<p className="uppercase italic text-sm">
							available in the european union and the united kingdom
						</p>
					</div>
				</div>
				<div className="flex-1 h-full flex items-start justify-end">
					<img src={headerImage} alt="Header Image Right" />
				</div>
			</div>
		</header>
	);
};

export default Header;
