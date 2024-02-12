/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				customGreen: "#2E7D32",
				customBlue: "#004080",
			}
		},
	},
	plugins: [],
}

