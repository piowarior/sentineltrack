/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "header-gradient":
          "radial-gradient(circle at center, #133559 0%, #0C2644 100%)",
      },
    },
  },

  plugins: [],
};