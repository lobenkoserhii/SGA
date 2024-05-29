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
        'HeroBG': "url('/gazda-app/public/Hero_bg.png')"
      
        
      },
      screens: {
        'TB': '640px',
        'NPC': '1024px',
        'PC': '1440px',
      },
      colors: {
        'BG': '#1A1C39',
        'Gold': '#D1B06B',
        'WH': '#D7D7D7'

          },
      
          fontFamily: {
            outfit: ['Outfit', 'sans-serif'], 
            cormorant: ['Cormorant Garamond', 'serif'], 
            academy: ['AcademyC-Bold', 'sans-serif'],
          },
    },
  },
  plugins: [],
}
export default config
