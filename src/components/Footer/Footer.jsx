import logo from "../../assets/logo.svg";
import { footerLinks } from "../../data/data";

const Footer = () => {
	return (
		<>
			<footer className="w-full py-20">
				<div className="container flex items-start justify-between gap-5">
					<div className="w-1/4">
						<img src={logo} alt="Logo" />
					</div>
					<div className="w-1/2 grid grid-cols-2 gap-10">
						{footerLinks.map((link) => (
							<div key={link.id}>
								<h4 className="font-semibold text-lg text-mediumDarkBlue mb-5">
									{link.heading}
								</h4>
								<ul>
									{link.links.map((link) => (
										<li className="mb-2 text-[0.9rem]">
											<a href="/">{link}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="relative w-1/4 h-60 bg-lightDarkBlue rounded-lg">
						{/* <svg
							className="absolute bottom-0 rounded-b-lg"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1440 320"
						>
							<path
								fill="#081A36"
								fill-opacity="1"
								d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,74.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
							></path>
						</svg> */}
						<svg className="absolute top-0 rounded-t-lg" viewBox="0 0 1440 320">
							<path
								fill="#081A36"
								fill-opacity="1"
								d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,74.7C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
							></path>
						</svg>
					</div>
				</div>
			</footer>
			<div className="w-full flex items-center justify-center gap-5 bg-lightYellow py-3 text-mediumDarkBlue font-light text-sm">
				<a href="/">Terms of Service</a>
				<a href="/">Legal notice</a>
				<a href="/">Privacy policy</a>
			</div>
		</>
	);
};

export default Footer;
