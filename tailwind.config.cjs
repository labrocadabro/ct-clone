/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/views/**/*.pug", "./src/assets/js/*.js"],
    darkMode: 'class', // Enable dark mode via class
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
                // Light mode palette (existing)
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
                // Dark mode semantic colors
                dark: {
                    // Background colors
                    background: {
                        primary: '#121212',    // Deep dark for main background
                        secondary: '#1E1E1E',  // Slightly lighter for secondary areas
                        tertiary: '#2C2C2C',   // Even lighter for tertiary sections
                    },
                    // Text colors
                    text: {
                        primary: '#E0E0E0',   // Light gray for primary text
                        secondary: '#A0A0A0', // Muted gray for secondary text
                        accent: '#FFFFFF',    // Pure white for high emphasis
                    },
                    // Interactive colors
                    interactive: {
                        primary: '#3EA1CC',   // Preserved primary color from light theme
                        hover: '#2E86AB',     // Slightly darker for hover states
                        active: '#226581',    // Even darker for active states
                    },
                    // Accent and utility colors
                    accent: {
                        success: '#4CAF50',   // Green for success states
                        error: '#F44336',     // Red for error states
                        warning: '#FFC107',   // Amber for warnings
                        info: '#2196F3',      // Blue for informational states
                    },
                    // Border and divider colors
                    border: {
                        light: '#404040',     // Dark border for light separation
                        dark: '#303030',      // Darker border for more emphasis
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
    safelist: ["flash-success", "flash-error", "flash-info", "dark"],
};