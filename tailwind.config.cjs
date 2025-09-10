/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        screens: {
            xs: "640px",
            sm: "780px",
            md: "926px",
            lg: "1024px", 
            xl: "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontFamily: {
                logo: ["Orienta", "serif"],
                main: ["Poppins", "sans-serif"],
                awesome: ['"Font Awesome 6 Free"'],
            },
            colors: {
                // Existing Light Mode Twilight Palette
                twilight: {
                    50: "#f1f8fa",
                    100: "#E8F3F7",
                    200: "#bfe0ee",
                    300: "#9ed0e5",
                    400: "#7ec0dd",
                    500: "#5eb1d4",
                    600: "#3ea1cc",
                    700: "#2e86ab",
                    800: "#226581",
                    900: "#153f51",
                },
                // Comprehensive Dark Mode Color Palette
                dark: {
                    50: '#f5f5f5',     // Very light gray, almost white
                    100: '#e9e9e9',    // Light gray
                    200: '#d9d9d9',    // Lighter medium gray
                    300: '#c4c4c4',    // Light medium gray
                    400: '#a3a3a3',    // Medium gray
                    500: '#858585',    // Medium dark gray
                    600: '#6b6b6b',    // Dark gray
                    700: '#4f4f4f',    // Darker gray
                    800: '#353535',    // Very dark gray
                    900: '#121212',    // Almost black, deep dark background
                },
                // Semantic Dark Mode Colors
                darkMode: {
                    background: {
                        primary: '#121212',    // Deep, neutral dark background
                        secondary: '#1E1E1E',  // Slightly lighter for secondary areas
                        tertiary: '#2C2C2C',   // Even lighter for tertiary elements
                    },
                    text: {
                        primary: '#E0E0E0',   // Light text for primary content
                        secondary: '#A0A0A0', // Muted text for secondary content
                        tertiary: '#6E6E6E',  // Subtle text for less important content
                    },
                    accent: {
                        primary: '#4A90E2',   // Bright blue for primary accents
                        secondary: '#5D6D7E', // Muted blue-gray for secondary accents
                        highlight: '#3498DB', // Bright highlight color
                    },
                },
            },
            textUnderlineOffset: {
                6: "6px",
            },
            textDecorationThickness: {
                3: "3px",
            },
            maxWidth: {
                "1/3": "33%",
                80: "20rem",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: ["flash-success", "flash-error", "flash-info"],
};