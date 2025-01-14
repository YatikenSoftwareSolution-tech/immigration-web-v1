/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF", // Custom primary color
        secondary: "#D80621", // Custom secondary color
        sAccent: "#EF2A45", // Custom accent color
        dark: "#212529", // Dark color for text or backgrounds
        textColor: "#363637", // Light color for background or text
      },
    },
  },
  plugins: [],
};
