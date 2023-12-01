/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"space": ['Space Grotesk', 'sans-serif'],
				"jet": ['JetBrains Mono', 'monospace'],
			},
			keyframes: {
				fadein: {
					'0%': { transform: 'scale(0.8, 0.8)' },
					'100%': { transform: 'scale(1, 1)' },
				  },
				levitate: {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' },
				}
			},
			animation: {
				fadein: 'fadein .3s ease-in-out',
				levitate: 'levitate 3.5s ease-in-out infinite',
			}
		}
	},
	plugins: [],
}
