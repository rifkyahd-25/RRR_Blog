const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          primary: '#4A90E2',      // Soft Blue
          secondary: '#F5F5F5',    // Warm Beige
          accent: '#FFCC00',       // Vibrant Yellow
          text: '#333333',         // Dark Gray
          link: '#5A99D4',         // Light Blue
        },
        // Dark theme colors
        dark: {
          primary: '#1A2A5A',      // Deep Navy Blue
          secondary: '#2C3E50',    // Dark Charcoal Gray
          accent: '#00B8D4',       // Bright Cyan
          text: '#E0E0E0',         // Light Gray
          link: '#4A90E2',         // Soft Blue
        },
      },
    },
  },
  plugins: [
      // ...
      flowbite.plugin(),
      require("tailwind-scrollbar"),
  ],
}