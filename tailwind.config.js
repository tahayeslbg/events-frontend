/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			desktop: { max: "1280px" },
			tablet: { max: "1024px" },
			mobile: { max: "424px" },
		},
		fontFamily: {
			galanoRegular: ["Galano-Grotesque-Regular", "sans-serif"],
			galanoMedium: ["Galano-Grotesque-Medium", "sans-serif"],
			galanoBold: ["Galano-Grotesque-Bold", "sans-serif"],
			galanoExtrabold: ["Galano-Grotesque-Extrabold", "sans-serif"],
		},

		extend: {
			backgroundImage: {
				checkIcon: "url(../assets/check-icon.png)",
			},
			gridTemplateColumns: {
				categoryGrid: "0.5fr 2fr 0.5fr",
			},
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
