/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode via class (progressive enhancement)
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
                // Light mode colors (existing twilight palette)
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
                // Dark mode color palette
                dark: {
                    // Base background and text colors
                    background: {
                        DEFAULT: "#121212", // Deep charcoal base
                        secondary: "#1E1E1E", // Slightly lighter background
                        tertiary: "#2C2C2C", // Even lighter background
                    },
                    text: {
                        primary: "#E0E0E0", // Light gray for primary text
                        secondary: "#A0A0A0", // Muted gray for secondary text
                        muted: "#6A6A6A", // Even more muted text
                    },
                    // Semantic colors for various UI elements
                    accent: {
                        primary: "#3EA1CC", // Preserved from twilight palette
                        secondary: "#2E86AB", // Complementary accent
                        hover: "#5EB1D4", // Lighter variant for hover states
                    },
                    // Alert and status colors
                    status: {
                        success: "#4CAF50", // Green for success
                        error: "#F44336", // Red for errors
                        warning: "#FF9800", // Orange for warnings
                        info: "#2196F3", // Blue for informational messages
                    },
                    // Border and divider colors
                    border: {
                        DEFAULT: "#333333", // Dark border color
                        subtle: "#2A2A2A", // More subtle border
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
            // Dark mode specific transition
            transitionProperty: {
                'colors-dark': 'background-color, color, border-color, text-decoration-color, fill, stroke'
            },
            // Ensure smooth color transitions
            transitionDuration: {
                'theme': '300ms'
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
    safelist: [
        "flash-success", 
        "flash-error", 
        "flash-info", 
        "dark", // Add dark mode class to safelist
    ],
    // Optional: Configuration for dark mode variants
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark']
        }
    }
};