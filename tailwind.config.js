/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		container: false,
		extend: {
			colors: {
				secondary: '#06ff61',
				bg: '#090f1b',
				lightDark: '#141414',
				darkGrey: '#1C1C1C',
				darkGreen: '#0F824A',
				grey: '#ADADAD',
				lightGrey: '#DCDCDC',
				normalGrey: '#A9A9A9',
				green: '#123E29',
				textMobile: '#BBB',
				textGrey: '#6E6E6E'
			},
			fontFamily: {
				suit: ['SUIT', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				pre: ['PretendardVariable', 'sans-serif'],
				kommon: ['KommonGrotesk', 'sans-serif']
			}
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
