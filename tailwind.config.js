/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				secondary: '#06ff61',
				bg: '#090f1b',
				lightDark: '#141414',
				darkGreen: '#0F824A'
			},
			fontFamily: {
				suit: ['SUIT', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				pre: ['Pretendard Variable', 'sans-serif']
			}
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
