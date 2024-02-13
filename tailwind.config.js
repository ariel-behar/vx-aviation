const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */

export default withMT({
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    	"./@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#2E7D32",
				secondary: "#004080",
				tertiary: "#0B0E37"
			},
			fontFamily: {
				font1: ["Montserrat", "sans-serif"],
				font2: ["Oswald", "sans-serif"],
			},
		},
	},
	plugins: [],
})

