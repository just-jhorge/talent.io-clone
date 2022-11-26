import React from "react";
import onboarding from "../../assets/onboarding-bg-right.png";
import Button from "../Button/Button";

const Onboarding = () => {
	return (
		<section className="grid grid-cols-3">
			<div className="bg-veryLightBlue relative flex items-center justify-center">
				<div className="absolute bg-white shadow-md rounded-md  w-[90%] p-10 -right-[45%]">
					<h3 className="text-veryDarkBlue text-[1.9rem] mb-8">
						Align your career decisions with your life goals
					</h3>
					<form className="flex flex-col items-start justify-center gap-7">
						<input
							type="text"
							className="border border-gray-300 text-gray-900 text-md rounded-md focus:border-blue-500 block w-full p-3"
							placeholder="First Name..."
							required
						/>
						<input
							type="text"
							className="border border-gray-300 text-gray-900 text-md rounded-md focus:border-blue-500 block w-full p-3"
							placeholder="Last Name..."
							required
						/>
						<select
							id="job"
							className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-3"
						>
							<option>Your job...</option>
							<option>
								Tech professional (eg. developer, data scientist, etc.)
							</option>
							<option>Recruiter, hiring manager, etc.</option>
							<option>Both</option>
						</select>
						<input
							type="email"
							id="email"
							className="border border-gray-300 text-gray-900 text-md rounded-md focus:border-blue-500 block w-full px-2 py-3"
							placeholder="Email Address..."
							required
						/>
						<div className="flex items-start mb-4">
							<input
								id="checkbox-1"
								type="checkbox"
								className="w-5 h-5 accent-yellow-500 text-white bg-gray-100 rounded border-gray-300 "
							/>
							<label
								htmlFor="checkbox-1"
								className="ml-2 text-xs leading-relaxed font-medium text-gray-900"
							>
								The Job Matcher is a tool developed by talent.io. Check this box
								to consent to the processing of your personal data by talent.io
								to receive the salary report and additional content about job
								search, tech recruitment, and our services. You may withdraw
								your consent at any time, for more information please refer to
								our Privacy Policy.
							</label>
						</div>
						<Button
							type="primary"
							text="Get the job Matcher"
							fontSize="md font-semibold"
						/>
					</form>
				</div>
			</div>
			<div className="py-12 bg-gradient-to-b from-mediumDarkBlue to-subtleBlue text-white col-span-2 flex flex-col items-center justify-center">
				<div>
					<img src={onboarding} />
				</div>
				<div>
					<p>Is your job right for you?</p>
					<p>Download our Job Matcher and find out!</p>
					<p>
						Evaluate objectively how well any position - including your current
						one -{" "}
					</p>
					<p>fits with your core values and objectives.</p>
				</div>
			</div>
		</section>
	);
};

export default Onboarding;
