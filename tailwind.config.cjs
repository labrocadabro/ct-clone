/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode via a class
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
                // Extend existing twilight palette with dark mode variants
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
                // Dark mode semantic color tokens
                dark: {
                    // Background colors
                    background: {
                        DEFAULT: "#121212",
                        surface: "#1E1E1E",
                        elevated: "#2C2C2C",
                    },
                    // Text colors
                    text: {
                        primary: "#E0E0E0",
                        secondary: "#A0A0A0",
                        disabled: "#6E6E6E",
                    },
                    // Accent and interaction colors
                    accent: {
                        DEFAULT: "#BB86FC",
                        variant: "#3700B3",
                    },
                    // Status colors
                    error: {
                        DEFAULT: "#CF6679",
                        light: "#FFB4AB",
                    },
                    success: {
                        DEFAULT: "#4CAF50",
                        light: "#81C784",
                    },
                    warning: {
                        DEFAULT: "#FFC107",
                        light: "#FFD54F",
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
            // Add transitions for smooth theme switching
            transitionProperty: {
                'theme': 'background-color, color, border-color, text-decoration-color, fill, stroke',
            },
            transitionDuration: {
                'theme': '300ms',
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info", 
        // Add dark mode related classes to safelist
        "dark:bg-dark-background", 
        "dark:text-dark-text-primary",
        "dark:bg-dark-background-surface"
    ],
};