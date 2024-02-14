const plugin = require('tailwindcss/plugin');
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
			fontSize: {
				base: "18px",
			}
		},
	},
	plugins: [
		plugin(function({addBase, theme, addUtilities, addVariant}) {
			addBase({
				"html": {fontSize: theme("fontSize.base")},
				"header": {fontFamily: theme("fontFamily.font2")},
				"body": {fontFamily: theme("fontFamily.font1")},
				"button": {fontFamily: theme("fontFamily.font1")},
				"input": {fontFamily: theme("fontFamily.font1")},
				"textarea": {fontFamily: theme("fontFamily.font1")},
				"select": {fontFamily: theme("fontFamily.font1")},
			})

			const newUtilities = {
				".text-shadow": {
					textShadow: "4px 4px 10px rgba(0, 0, 0, 0.7)"
				},
				".bg-custom-gradient":{
					background: "linear-gradient(45deg, #3a3c60 0%, #0b0e37 100%)"
				},
				".bg-custom-gradient-opaque":{
					background: "linear-gradient(45deg, rgba(50,53,76,0.7) 0%, rgba(11,14,55,0.71) 100%)"
				},
				".bg-custom-inset-shadow": {
					boxShadow: "inset 1px 0px 100px -11px #A2612C"
				}
			}

			addUtilities(newUtilities)
		})
	],
})

