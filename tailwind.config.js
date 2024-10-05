/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          black: "#131515",
          orange: "#EE6123",
          teal: "#028090",
          white: "#ffffff",
          platinum: "#EDF6F9",
          blue: "#006D77",
          "light-blue": "#83C5BE",
          "light-orange": "#FFDDD2",
          orange: "#E29578",
        },
      },
    },
  },
  plugins: [],
};
