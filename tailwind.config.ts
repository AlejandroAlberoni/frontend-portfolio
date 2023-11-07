import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'lexendexa': ['Lexend Exa', 'sans-serif'],
        'Inter': ['Inter', 'sans-serif'],
        'Josefin': ['Josefin Sans', 'sans-serif'],
        'Staatliches': ['Staatliches', 'sans-serif'],
      },
      "animation": {
        "fade-in": "fade-in 1s ease-in",
        "fade-in-left": "fade-in-left 1s ease-in-out",
        "blurred-fade-in": "blurred-fade-in 0.9s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { "opacity": "0" },
          "100%": { "opacity": "1" },
        },
        "fade-in-left": {
          "0%": {
            "opacity": "0",
            "transform": "translateX(200px)"
          },
          "100%": {
            "opacity": "1",
            "transform": "translateX(0)"
          }
        },
        "blurred-fade-in": {
          "0%": {
            "filter": "blur(5px)",
            "opacity": "0"
          },
          "100%": {
            "filter": "blur(0)",
            "opacity": "1"
          }
        }
      }

    },
  },
  plugins: [],
}
export default config
