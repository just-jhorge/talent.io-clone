import React from "react";
import ctaImage from "../../assets/onboarding-bg-2.png";

const CTA = () => {
	return (
		<section className="bg-veryDarkBlue text-white py-20">
			<div className="container flex items-center justify-center">
				<div>
					<h2 className="text-5xl font-light mb-5">
						Are you <span className="text-[#A4FAF2]">hiring tech talent</span> ?
					</h2>
					<p className="mb-8 text-lg">
						talent.io is the simplest way to build your tech team
					</p>
					<p className="mb-10 text-lg">
						Find out how Europe's most successful companies hired 6000+ tech
						professionals on our platform
					</p>
					<button className="bg-[#A4FAF2] text-veryDarkBlue font-semibold px-4 py-3 rounded-md">
						Learn more
					</button>
				</div>
				<div>
					<img src={ctaImage} alt="Get On board" />
				</div>
			</div>
		</section>
	);
};

export default CTA;
