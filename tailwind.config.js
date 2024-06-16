/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2x1": "32px",
      },
      borderWidth: {
        2: "1.5px",
      },
      maxWidth: {
        "575px": "575px",
      },
    },
  },
  plugins: [],
};
