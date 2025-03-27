
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				blog: {
					dark: '#0a0a0a',
					darker: '#050505',
					neon: '#00f0ff',
					accent: '#ff00aa',
					purple: '#8a2be2',
					charcoal: '#121212',
					deepblack: '#000000',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px var(--glow-color, #00f0ff), 0 0 20px 4px var(--glow-color, #00f0ff)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 15px 3px var(--glow-color, #00f0ff), 0 0 30px 6px var(--glow-color, #00f0ff)'
					},
				},
				'typewriter': {
					'0%': { width: '0%' },
					'100%': { width: '100%' },
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'pulse': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'glitch': {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
				},
				'particles-move': {
					'0%': { transform: 'translateY(0) translateX(0)' },
					'25%': { transform: 'translateY(-5px) translateX(5px)' },
					'50%': { transform: 'translateY(-10px) translateX(0)' },
					'75%': { transform: 'translateY(-5px) translateX(-5px)' },
					'100%': { transform: 'translateY(0) translateX(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-up': 'fade-up 0.5s ease-out forwards',
				'fade-down': 'fade-down 0.5s ease-out forwards',
				'fade-left': 'fade-left 0.5s ease-out forwards',
				'scale-in': 'scale-in 0.3s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'typewriter': 'typewriter 3s steps(40) forwards',
				'blink': 'blink 0.7s infinite',
				'floating': 'floating 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 10s linear infinite',
				'glitch': 'glitch 0.5s ease-in-out infinite',
				'particles-move': 'particles-move 5s ease-in-out infinite',
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			boxShadow: {
				'neon': '0 0 5px theme("colors.blog.neon"), 0 0 10px theme("colors.blog.neon")',
				'neon-lg': '0 0 10px theme("colors.blog.neon"), 0 0 20px theme("colors.blog.neon"), 0 0 40px theme("colors.blog.neon")',
				'neon-pink': '0 0 5px theme("colors.blog.accent"), 0 0 10px theme("colors.blog.accent")',
				'neon-purple': '0 0 5px theme("colors.blog.purple"), 0 0 10px theme("colors.blog.purple")',
			},
			textShadow: {
				'neon': '0 0 5px theme("colors.blog.neon"), 0 0 10px theme("colors.blog.neon")',
				'neon-lg': '0 0 10px theme("colors.blog.neon"), 0 0 20px theme("colors.blog.neon"), 0 0 40px theme("colors.blog.neon")',
				'neon-pink': '0 0 5px theme("colors.blog.accent"), 0 0 10px theme("colors.blog.accent")',
				'neon-purple': '0 0 5px theme("colors.blog.purple"), 0 0 10px theme("colors.blog.purple")',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow-neon': {
					textShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff',
				},
				'.text-shadow-neon-lg': {
					textShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 40px #00f0ff',
				},
				'.text-shadow-neon-pink': {
					textShadow: '0 0 5px #ff00aa, 0 0 10px #ff00aa',
				},
				'.text-shadow-neon-purple': {
					textShadow: '0 0 5px #8a2be2, 0 0 10px #8a2be2',
				},
				'.glassmorphism': {
					backgroundColor: 'rgba(10, 10, 10, 0.5)',
					backdropFilter: 'blur(10px)',
					borderRadius: '10px',
					border: '1px solid rgba(255, 255, 255, 0.1)',
				},
				'.scrollbar-hidden': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
					'&::-webkit-scrollbar': {
						display: 'none',
					},
				},
			};
			addUtilities(newUtilities);
		},
	],
} satisfies Config;

