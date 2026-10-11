/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        takealot: {
          blue: {
            DEFAULT: '#0b79bf',
            light: '#2895e8',
            dark: '#085f98',
            deep: '#04426c',
            subtle: '#eaf4fc'
          },
          green: {
            DEFAULT: '#1c9444',
            light: '#e8f5e9',
            dark: '#147233'
          },
          orange: {
            DEFAULT: '#f25b2a',
            light: '#fff2ec',
            dark: '#d94718'
          },
          yellow: {
            DEFAULT: '#f59e0b',
            star: '#ffb800'
          },
          charcoal: '#333333',
          dark: '#1e293b',
          bg: '#f4f4f4',
          border: '#e5e7eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
