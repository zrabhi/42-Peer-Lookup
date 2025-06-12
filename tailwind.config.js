/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
 
      fontFamily: {
        thin: ['LexendMega_100Thin'],
        extralight: ['LexendMega_200ExtraLight'],
        light: ['LexendMega_300Light'],
        normal: ['LexendMega_400Regular'],
        medium: ['LexendMega_500Medium'],
        semibold: ['LexendMega_600SemiBold'],
        bold: ['LexendMega_700Bold'],
        extrabold: ['LexendMega_800ExtraBold'],
        black: ['LexendMega_900Black'],
      },
    },
  plugins: [],
}