/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors:{
			veryDarkBlue: 'hsl(243, 87%, 12%)',
			desaturatedBlue: 'hsl(238,22%,44%)',
			brightBlue: 'hsl(224,93%,58%)',
			moderateCyan: 'hsl(170,45%,43%)',
			liteGrayishBlue:'hsl(240, 75%, 98%)',
			liteGray:'hsl(0, 0%, 75%)',
			red:'red',
		},
		fontFamily:{
			sans: ['Open Sans','sans-serif'],
			raleway: ['Raleway','sans-serif'],
		},
		backgroundImage: () => ({
			'desktop': "url('/assets/bg-curve-desktop.svg')",
			'mobile': "url('/assets/bg-curve-mobile.svg')",
			
		 }),
		 fontWeight:{
			regular: 400,
			bold: 700
		 },
		extend: {
			screens:{
				'2xl':'1440px'
			},
			gridTemplateColumns:{
				'13': 'repeat(3, minmax(max-content,max-content))'
			}
		},
	},
	plugins: [],
}
