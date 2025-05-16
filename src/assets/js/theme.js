// Theme Management Script
const LOCAL_STORAGE_KEY = 'app-theme';
const DARK_MODE_CLASS = 'dark';

function initializeTheme() {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
        document.documentElement.classList.add(DARK_MODE_CLASS);
    } else {
        document.documentElement.classList.remove(DARK_MODE_CLASS);
    }
}

function toggleTheme() {
    const htmlElement = document.documentElement;
    const isDarkMode = htmlElement.classList.toggle(DARK_MODE_CLASS);
    
    // Store theme preference
    localStorage.setItem(LOCAL_STORAGE_KEY, isDarkMode ? 'dark' : 'light');
    
    // Optional: Track theme change event if needed
    console.log(`Theme switched to: ${isDarkMode ? 'Dark' : 'Light'} Mode`);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', initializeTheme);

// Initialize theme on script load
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    
    // Add theme toggle button functionality
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

export { initializeTheme, toggleTheme };