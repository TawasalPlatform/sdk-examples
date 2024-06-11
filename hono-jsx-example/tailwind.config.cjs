/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", '[data-theme="dark"]'],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./@media/**/*.{ts,tsx}",
		"./@stocks/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			zIndex: {
				"1":"1",
				"2":"2",
				"3":"3",
				"4":"4",
				"5":"5",
				"6":"6",
				"7":"7",
				"8":"8",
				"9":"9",
				"11":"11",
				"12":"12",
				"13":"13",
				"14":"14",
				"15":"15",
				"16":"16",
				"17":"17",
				"18":"18",
				"19":"19",
				"99":"99",
				"100":"100"
			},
			transitionDuration: {
				2000: "2000ms",
				1500: "1500ms",
				1200: "1200ms",
				1050: "1050ms",
				750: "750ms",
				600: "600ms",
				550: "550ms",
			},
			transitionDelay: {
				2000: "2000ms",
				1500: "1500ms",
				1200: "1200ms",
				1050: "1050ms",
				750: "750ms",
				550: "550ms",
				600: "600ms",
			},
			backgroundImage: {
				"gradient-35": "linear-gradient(35deg, var(--tw-gradient-stops))",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-linear": "linear-gradient(var(--tw-gradient-stops))",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
		require("tailwindcss/nesting"),
	],
};
