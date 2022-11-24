import { useState, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const navLinks = [
	{
		id: 1,
		linkName: "Candidates",
	},
	{
		id: 2,
		linkName: "Recruiters",
	},
	{
		id: 3,
		linkName: "Resourses",
	},
	{
		id: 4,
		linkName: "EN",
	},
];

const Navbar = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`w-full fixed text-md ${
				scrollPosition > 10
					? "bg-white drop-shadow-md text-veryDarkBlue"
					: "bg-transparent text-white"
			} h-20 flex items-center justify-center`}
		>
			<div className="container flex items-center justify-between">
				<div className="h-[1.4rem]">
					<Logo scrollPosition={scrollPosition} />
				</div>
				<div className="hidden lg:flex items-center justify-center gap-5">
					<div className="flex items-center justify-center gap-5">
						{navLinks.map((link) => (
							<div
								key={link.id}
								className="flex items-center justify-center gap-1 cursor-pointer"
							>
								<a href="/">{link.linkName}</a>
								<BsChevronDown className="text-md" />
							</div>
						))}
					</div>
					<div className="flex items-center justify-center gap-3">
						<Button
							text="Login"
							type={`${scrollPosition > 10 ? "secondary" : "default"}`}
							fontSize="md"
						/>
						<Button text="Sign up" type="primary" fontSize="md" />
					</div>
				</div>
				<div className="lg:hidden flex items-center justify-center gap-5">
					<div className="hidden md:block lg:hidden">
						<Button text="Sign up" type="primary" fontSize="md" />
					</div>
					<AiOutlineMenu className="text-2xl lg:hidden" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
