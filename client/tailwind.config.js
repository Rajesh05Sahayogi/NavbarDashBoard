/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{},
      colors: {
        background: "var(--background)",
        boxes: "var(--boxes)",
        "bright-blue": "var(--bright-blue)",
        dark: "var(--dark)",
        "variable-collection-grey": "var(--variable-collection-grey)",
        "variable-collection-white": "var(--variable-collection-white)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Hide scrollbar for Chrome, Safari, Edge */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none'             /* Chrome, Safari */
          }
        },
      });
    },
  ],
};
