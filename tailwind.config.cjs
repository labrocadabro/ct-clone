/** @type {import('tailwindcss').Config} */
module.exports = {
    // Enable dark mode with class-based strategy
    darkMode: 'class',
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
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
            // Existing font configurations
            fontFamily: {
                logo: ["Orienta", "serif"],
                main: ["Poppins", "sans-serif"],
                awesome: ['"Font Awesome 6 Free"'],
            },
            // Color palette with comprehensive dark mode support
            colors: {
                // Existing Twilight palette with dark mode variants
                twilight: {
                    light: {
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
                    dark: {
                        50: "#0c2834",
                        100: "#113642",
                        200: "#1b4c5a",
                        300: "#266272",
                        400: "#317889",
                        500: "#3d8ea1",
                        600: "#4ba5ba",
                        700: "#59bcd3",
                        800: "#6fd3ec",
                        900: "#85ebff",
                    }
                },
                // Dark mode semantic colors
                background: {
                    light: "#ffffff",
                    dark: "#121212"
                },
                text: {
                    light: "#000000",
                    dark: "#e0e0e0"
                },
                primary: {
                    light: "#2e86ab",
                    dark: "#59bcd3"
                },
                secondary: {
                    light: "#153f51", 
                    dark: "#266272"
                },
                accent: {
                    light: "#3ea1cc",
                    dark: "#4ba5ba"
                },
                // Additional semantic colors
                success: {
                    light: "#4caf50",
                    dark: "#81c784"
                },
                error: {
                    light: "#f44336",
                    dark: "#e57373"
                },
                warning: {
                    light: "#ff9800", 
                    dark: "#ffb74d"
                },
                info: {
                    light: "#2196f3",
                    dark: "#64b5f6"
                }
            },
            // Existing extended configurations
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
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};