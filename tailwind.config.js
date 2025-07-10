/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#3bbcef',
        'brand-orange': '#fead01',
        'brand-dark-blue': '#105f7f',
      },
      fontFamily: {
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 