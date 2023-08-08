/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      'body': ['Montserrat', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"sans-serif"'],
    },
    extend: {},
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("flowbite/plugin")
  ],
}

