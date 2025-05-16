import { meetsContrastStandard } from '../utils/color-contrast.js';

/**
 * Theme management utility for dark mode
 */
class ThemeManager {
  constructor() {
    this.storageKey = 'theme-preference';
    this.darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.initTheme();
    this.bindSystemThemeListener();
  }

  /**
   * Initialize theme based on stored preference or system settings
   */
  initTheme() {
    const savedTheme = this.getStoredTheme();
    const systemTheme = this.getSystemTheme();

    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else if (systemTheme) {
      this.applyTheme(systemTheme);
    }
  }

  /**
   * Get stored theme preference
   * @returns {string|null} Stored theme preference
   */
  getStoredTheme() {
    return localStorage.getItem(this.storageKey);
  }

  /**
   * Get system's color scheme preference
   * @returns {string} Theme based on system preference
   */
  getSystemTheme() {
    return this.darkModeMediaQuery.matches ? 'dark' : 'light';
  }

  /**
   * Apply theme to the document
   * @param {string} theme - Theme to apply (light/dark)
   */
  applyTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    this.validateColorContrast();
    localStorage.setItem(this.storageKey, theme);
  }

  /**
   * Validate color contrast for current theme
   */
  validateColorContrast() {
    const isDarkMode = document.documentElement.classList.contains('dark');
    
    // Example color validation for the entire page
    const testCases = [
      { 
        foreground: isDarkMode ? '#E0E0E0' : '#000000', 
        background: isDarkMode ? '#121212' : '#FFFFFF' 
      }
    ];

    const invalidContrasts = testCases.filter(
      colors => !meetsContrastStandard(colors.foreground, colors.background)
    );

    if (invalidContrasts.length > 0) {
      console.warn('Color contrast issue detected in current theme', invalidContrasts);
    }
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme() {
    const currentTheme = this.getStoredTheme() || this.getSystemTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
  }

  /**
   * Bind system theme change listener
   */
  bindSystemThemeListener() {
    this.darkModeMediaQuery.addEventListener('change', (e) => {
      const systemTheme = e.matches ? 'dark' : 'light';
      // Only change if no user preference is set
      if (!this.getStoredTheme()) {
        this.applyTheme(systemTheme);
      }
    });
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();