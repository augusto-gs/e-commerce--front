/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "32px": "32px",
      },
      borderWidth: {
        2: "1.5px",
      },
      maxWidth: {
        "575px": "575px",
      },
      colors: {
        "neutral-100": "#666",
      },
      height: {
        "45px": "45px",
      },
      width: {
        "200px": "200px",
      },
      borderRadius: {
        "md-12px": "12px",
      },
    },
  },
  plugins: [],
};
