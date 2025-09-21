import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ca-dark': '#2A3333',     // Nosso Chumbo/Grafite
        'ca-cream': '#F2E8D9',    // Nosso Creme/Bege
        'ca-orange': '#E89C3A',   // Nosso Laranja
        'ca-green': '#6A8A82',    // Nosso Verde
      },
    },
  },
  plugins: [],
}
export default config