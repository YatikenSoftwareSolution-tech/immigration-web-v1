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
        secondary: "#E12310", // Custom secondary color
        tertiary: "#0198E9", // logo shade of blue
        sAccent: "#EF2A45", // Custom accent color
        secBlue: "#090c9b", // Dark color for text or backgrounds
        dark: "#474749",
        
        gray: "#939393", // Light color for background or text
      },
      backgroundImage: {
        'landingPageBanner3': "url('/src/assets/LandingPageBanner3.jpg')",
        
      }
    },
  },
  plugins: [],
};
