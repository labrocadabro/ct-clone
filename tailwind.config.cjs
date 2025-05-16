/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class',
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
                // Light Color Palette (Extended twilight palette)
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
                // Dark Mode Color Palette (Professional, High-Contrast)
                dark: {
                    // Background levels
                    bg: {
                        primary: "#121212",     // Deep charcoal
                        secondary: "#1E1E1E",   // Slightly lighter charcoal
                        tertiary: "#2C2C2C",    // Light charcoal
                    },
                    // Text colors
                    text: {
                        primary: "#E0E0E0",     // Light grey
                        secondary: "#A0A0A0",   // Muted grey
                        muted: "#707070",       // Dark grey
                    },
                    // Accent colors
                    accent: {
                        primary: "#3EA1CC",     // Retained from light mode twilight
                        secondary: "#2E86AB",   // Complementary blue
                        highlight: "#4CAF50",   // Soft green for positive actions
                        warning: "#FFC107",     // Amber for warnings
                        danger: "#F44336",      // Red for critical actions
                    },
                    // Border and divider colors
                    border: {
                        default: "#3A3A3A",    // Dark border
                        subtle: "#2A2A2A",     // More subtle border
                    }
                }
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
            // Additional dark mode transition properties
            transitionProperty: {
                'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
            },
            transitionDuration: {
                '250': '250ms',
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info", 
        "dark",  // For manual dark mode class
        "dark:bg-dark-bg-primary",  // Example dark mode class
    ],
};