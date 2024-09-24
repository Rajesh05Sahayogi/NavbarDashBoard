/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // plugins: [
  //   function ({ addUtilities }) {
  //     addUtilities({
  //       '.hide-scrollbar': {
  //         /* Hide scrollbar for WebKit browsers */
  //         '-webkit-overflow-scrolling': 'touch',
  //         'scrollbar-width': 'none', /* Firefox */
  //         '-ms-overflow-style': 'none', /* IE and Edge */
  //       },
  //       '.hide-scrollbar::-webkit-scrollbar': {
  //         display: 'none', /* WebKit browsers */
  //       },
  //     });
  //   },
  // ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* For WebKit browsers (Chrome, Safari) */
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari */
        },
      });
    },
  ],
}

