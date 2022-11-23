/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				md: "3rem",
				lg: "5rem",
				xl: "6rem",
				"2xl": "7rem",
			},
		},
		extend: {
			colors: {
				veryDarkBlue: "rgb(0, 19, 47)",
				mediumDarkBlue: "rgb(5, 25, 55)",
				lightDarkBlue: "rgb(7, 32, 69)",
				subtleBlue: "rgb(15, 47, 95)",
				deepYellow: "rgb(251,206,112)",
				mediumYellow: "rgb(255, 225, 162)",
				lightYellow: "rgb(255,239,206)",
			},
		},
	},
	plugins: [],
};