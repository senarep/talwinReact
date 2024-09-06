/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#579c9a',
        secundary: '#3928'
      },
    },
  },
  plugins: [],
}

