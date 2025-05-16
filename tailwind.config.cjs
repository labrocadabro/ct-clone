/** @type {import('tailwindcss').Config} */
module.exports = {
\tcontent: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
\tdarkMode: 'class', // Enable class-based dark mode
\ttheme: {
\t\tscreens: {
\t\t\txs: "640px",
\t\t\tsm: "780px",
\t\t\tmd: "926px",
\t\t\tlg: "1024px",
\t\t\txl: "1280px",
\t\t\t"2xl": "1536px",
\t\t},
\t\textend: {
\t\t\tfontFamily: {
\t\t\t\tlogo: ["Orienta", "serif"],
\t\t\t\tmain: ["Poppins", "sans-serif"],
\t\t\t\tawesome: ['"Font Awesome 6 Free"'],
\t\t\t},
\t\t\tcolors: {
\t\t\t\t// Light Mode Theme
\t\t\t\ttwilight: {
\t\t\t\t\t50: "#f1f8fa",
\t\t\t\t\t100: "#E8F3F7",
\t\t\t\t\t200: "#bfe0ee",
\t\t\t\t\t300: "#9ed0e5",
\t\t\t\t\t400: "#7ec0dd",
\t\t\t\t\t500: "#5eb1d4",
\t\t\t\t\t600: "#3ea1cc",
\t\t\t\t\t700: "#2e86ab",
\t\t\t\t\t800: "#226581",
\t\t\t\t\t900: "#153f51",
\t\t\t\t},
\t\t\t\t// Dark Mode Theme with Accessibility Considerations
\t\t\t\tdark: {
\t\t\t\t\tbackground: '#121212', // Deep dark background
\t\t\t\t\ttext: '#E0E0E0', // Light grey text for readability
\t\t\t\t\tprimary: '#4DB6AC', // Soft teal for primary elements
\t\t\t\t\tsecondary: '#B388FF', // Soft purple for secondary elements
\t\t\t\t\taccent: '#FF8A80', // Soft red for accent
\t\t\t\t\tborder: '#444444', // Subtle border color
\t\t\t\t},
\t\t\t},
\t\t\ttextUnderlineOffset: {
\t\t\t\t6: "6px",
\t\t\t},
\t\t\ttextDecorationThickness: {
\t\t\t\t3: "3px",
\t\t\t},
\t\t\tmaxWidth: {
\t\t\t\t"1/3": "33%",
\t\t\t\t80: "20rem",
\t\t\t},
\t\t},
\t},
\tplugins: [
\t\trequire("@tailwindcss/forms"),
\t\t// Custom plugin for dark mode accessibility
\t\t({ addBase, theme }) => {
\t\t\taddBase({
\t\t\t\t// Apply WCAG 2.1 contrast guidelines to dark mode
\t\t\t\t'.dark': {
\t\t\t\t\tbackgroundColor: theme('colors.dark.background'),
\t\t\t\t\tcolor: theme('colors.dark.text'),
\t\t\t\t}
\t\t\t});
\t\t}
\t],
\tsafelist: [
\t\t"flash-success", 
\t\t"flash-error", 
\t\t"flash-info",
\t\t// Safelist dark mode classes to ensure they are not purged
\t\t"dark:bg-dark-background",
\t\t"dark:text-dark-text",
\t\t"dark:border-dark-border"
\t],
};