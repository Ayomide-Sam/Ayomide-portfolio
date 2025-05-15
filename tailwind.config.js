// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         navy: '#001f3f',  // Example navy color
//         teal: '#008080'   // Standard teal
//       }
//     },
//   },
//   plugins: [],
// }

module.exports = {
  theme: {
    extend: {
      colors: {
        navy: '#001f3f', // Your custom navy blue
      },
    },
  },
  // make sure this exists too
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
};