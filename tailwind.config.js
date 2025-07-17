/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#71C9CE",
        secondary: "#A6E3E9",
        background: "#CBF1F5",
        tertiary : "#E3FDFD",
    },
    fontFamily: {
      body: ["Poppins" , "sans-serif"],
      highlights: ["Yellowtail", "cursive"],
    }
  },
  plugins: [],
}
};