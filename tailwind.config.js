/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Geist Mono"', 'monospace'], // Add Geist Mono as the default monospace font
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "cupcake", "bumblebee"],  // config later, just follow daisyUi doccumentation to enable dark mode!
  },
}

