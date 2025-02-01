/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 0.2s ease-out",
      },
      keyframes: {
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
