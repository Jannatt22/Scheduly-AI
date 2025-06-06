/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        'text-main': '#1F2937',
        'bg-light': '#F9FAFB',
        'bg-dark': '#111827',
      },
    },
  },
  plugins: [],
} 