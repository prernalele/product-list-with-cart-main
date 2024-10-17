

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}","./src/components/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      colors: {
        customRed: 'hsl(14, 86%, 42%)',
        customGreen: 'hsl(159, 69%, 38%)'
      },
      fontFamily: {
        redhat: ['"Red Hat Text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

