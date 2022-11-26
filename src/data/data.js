import zalando from "../assets/zalando.svg";
import amundi from "../assets/amundi.svg";
import leboncoin from "../assets/leboncoin.svg";
import leafGrow from "../assets/leafgrow.svg";
import leafgrowWhite from "../assets/leafgrow-white.svg";
import leboncoinWhite from "../assets/leboncoin-white.svg";
import zalandoWhite from "../assets/zalando-white.svg";
import amundiWhite from "../assets/amundi-white.svg";
import yasmine from "../assets/yasmine-a.jpg";
import iqra from "../assets/iqra-a.jpeg";
import gregory from "../assets/gregory-m.jpeg";
import aureli from "../assets/aurelien-m.jpeg";

import officeCoding from "../assets/office-coding.jpg";
import officeSetting from "../assets/office-setting.png";
import writingOffice from "../assets/writing-office.jpeg";
import menMeeting from "../assets/men-meeting.jpeg";
import womenMeeting from "../assets/women-meeting.jpeg";
import lounge from "../assets/lounge.png";

import france from "../assets/france.svg";
import uk from "../assets/uk.svg";
import germany from "../assets/germany.svg";
import netherland from "../assets/netherland.svg";
import belgium from "../assets/belgium.svg";

export const tabOneList = [
	{ id: 1, text: "Create your profile and let companies apply to you" },
	{
		id: 2,
		text: "Get interview offers from top tech companies and decide who you want to meet",
	},
	{
		id: 3,
		text: "Find your next job in 20 days on average",
	},
];

export const tabTwoList = [
	{
		id: 1,
		text: "Stop searching and let us send you tailored freelance projects",
	},
	{
		id: 2,
		text: "Work on impactful projects of 3 months or longer",
	},
	{
		id: 3,
		text: "Get paid in 14 days, secured and guaranteed by talent.io",
	},
	{ id: 4, text: "Free for freelancers" },
];

export const tabThreeList = [
	{ id: 1, text: "Create your profile and let companies apply to you" },
	{
		id: 2,
		text: "Find an internship in 20 days on average",
	},
	{
		id: 3,
		text: "Jumpstart your career by joining a top tech company",
	},
];

export const tabFourList = [
	{ id: 1, text: "Work from anywhere, no visa required" },
	{
		id: 2,
		text: "Get hired by tech companies with outstanding remote culture",
	},
	{
		id: 3,
		text: "Permanent or freelance",
	},
];

export const TestimonialItems = [
	{
		id: 1,
		quote:
			"talent.io has been very useful and works well, I received an offer within 3 weeks. talent.io team is super friendly and helpful. I contacted my talent advocate whenever I needed advice. I really recommend it.",
		name: "Yasmine A.",
		role: "Senior Software Engineer",
		logo: zalando,
		offers: "3",
		daysHired: "20 days",
	},
	{
		id: 2,
		quote:
			"At talent.io, everything is done easily online: importing the LinkedIn profile, consulting the details of the mission, contacting the client directly, signing the contracts and automatically generating the invoices while sending them to the client. As a freelancer, it allows me to focus on my work and it facilitates the financial management of my business",
		name: "Grégory M.",
		role: "Drupal Developer",
		logo: amundi,
		offers: "7",
		daysHired: "12 days",
	},
	{
		id: 3,
		quote:
			"talent.io offered me real support throughout my search for a graduate internship. I received many relevant offers, and it's partly thanks to this service that I'm now flourishing in a permanent position at Leboncoin!",
		name: "Aurélien G.",
		role: "Product Owner",
		logo: leboncoin,
		offers: "6",
		daysHired: "21 days",
	},
	{
		id: 4,
		quote:
			"I am really happy that I found talent.io when I was in search of a good remote opportunity. The overall hiring process was smooth and organized. I found my dream job in no time and for free. From the first call of data collection up to when we finalised things, they helped me out during each step and guided me when I came across issues like tax for example.",
		name: "Iqra A.",
		role: "Senior QA Engineer",
		logo: leafGrow,
		offers: "5",
		daysHired: "14 days",
	},
];

export const testimonyPerson = [
	{
		id: 0,
		type: "permanent",
		name: "Yasmine A.",
		picture: yasmine,
		role: "Senior Software Engineer",
		logo: zalandoWhite,
	},
	{
		id: 1,
		type: "freelance",
		name: "Grégory M.",
		picture: gregory,
		role: "Drupal Developer",
		logo: amundiWhite,
	},
	{
		id: 2,
		type: "internship",
		name: "Aurélien G.",
		picture: aureli,
		role: "Product Owner",
		logo: leboncoinWhite,
	},
	{
		id: 3,
		type: "remote",
		name: "Iqra A.",
		picture: iqra,
		role: "Senior QA Engineer",
		logo: leafgrowWhite,
	},
];

export const companyTestimony = [
	{
		id: 0,
		name: "Louise Mouton",
		role: "HR Recruiter",
		company: "GitGuardian",
		imgSrc: officeCoding,
		quote:
			"talent.io's platform is very easy to use, allowing us to collaborate from the first stage of hiring",
	},
	{
		id: 1,
		name: "Julient Ciftci",
		role: "Talent Acquisition Specialist",
		company: "Leboncoin",
		imgSrc: officeSetting,
		quote:
			"I think talent.io is hands down one of the best and most efficient tool available on the market",
	},
	{
		id: 2,
		name: "Pierre Sutter",
		role: "CTO",
		company: "Citio",
		imgSrc: lounge,
		quote:
			"Thanks to talent.io we have managed to grow from a technical team of 2 people to 25 people in three years",
	},
	{
		id: 3,
		name: "Aminata Pelletier",
		role: "Head of Recruitment",
		company: "Meilleurs Agents",
		imgSrc: menMeeting,
		quote:
			"talent.io is a great platform and a must in our current talent acquisition strategy",
	},
	{
		id: 4,
		name: "Alix Vandame",
		role: "HR Recruitment",
		company: "eFounders",
		imgSrc: writingOffice,
		quote:
			"I always get a selection of candidates that perfectly match my search",
	},
	{
		id: 5,
		name: "Mano Le Saux",
		role: "Manager",
		company: "Ekimetrics",
		imgSrc: womenMeeting,
		quote:
			"talent.io is a very powerful platform, that helps us onboard highly skilled people",
	},
];

export const countries = [
	{
		id: 1,
		country: "France",
		cities: "Paris, Lille, Lyon, Toulouse, Bordeaux",
		flag: france,
	},
	{ id: 2, country: "UK", cities: "London", flag: uk },
	{
		id: 3,
		country: "Germany",
		cities: "Berlin, Munich, Hamburg",
		flag: germany,
	},
	{ id: 4, country: "The Netherlands", cities: "Amsterdam", flag: netherland },
	{ id: 5, country: "Belgium", cities: "Brussels", flag: belgium },
];

export const footerLinks = [
	{
		id: 1,
		heading: "Find your next job",
		links: [
			"talent.io for candidates",
			"Permanent jobs",
			"Freelance projects",
			"Remote jobs",
			"Internships and apprenticeships",
		],
	},
	{
		id: 2,
		heading: "Build your tech team",
		links: [
			"Overview of all our services",
			"Permanent jobs",
			"Freelance projects",
			"Remote jobs",
			"Internships and apprenticeships",
			"Organize your tech team retreat",
		],
	},
	{
		id: 3,
		heading: "About us",
		links: ["Our story", "Life at talent.io", "Careers"],
	},
	{
		id: 4,
		heading: "Resources",
		links: [
			"All our resources",
			"Online events",
			"DevBreak Festival",
			"Before DevBreak",
			"2022 European Tech Salary Report",
		],
	},
];
