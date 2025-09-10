// Theme Management Utility

const THEME_KEY = 'color-theme';
const DARK_CLASS = 'dark';

function getPreferredTheme() {
    // Check local storage first
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) return storedTheme;

    // Then check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
}

function applyTheme(theme) {
    const isDark = theme === 'dark';
    
    // Toggle dark class on document element
    document.documentElement.classList.toggle(DARK_CLASS, isDark);
    
    // Store preference
    localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
    const currentTheme = getPreferredTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);

    // Optional: Add theme toggle button event listener
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newTheme = e.matches ? 'dark' : 'light';
    applyTheme(newTheme);
});

export { applyTheme, toggleTheme, getPreferredTheme };