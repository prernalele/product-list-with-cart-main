

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{js,jsx,html}","./src/components/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        "redHatText":"Red Hat Text",
      }
    },
  },
  plugins: [],
}

