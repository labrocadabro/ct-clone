import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { applyTheme, toggleTheme, getPreferredTheme } from '../src/assets/js/theme.js';

describe('Theme Management', () => {
    // Mocking localStorage
    const localStorageMock = (() => {
        let store = {};
        return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => store[key] = value.toString(),
            clear: () => store = {}
        };
    })();

    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock
    });

    beforeEach(() => {
        localStorageMock.clear();
        document.documentElement.classList.remove('dark');
    });

    afterEach(() => {
        document.documentElement.classList.remove('dark');
    });

    it('should get default theme based on system preference', () => {
        const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = getPreferredTheme();
        expect(theme).toBe(defaultDark ? 'dark' : 'light');
    });

    it('should apply dark theme correctly', () => {
        applyTheme('dark');
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(localStorage.getItem('color-theme')).toBe('dark');
    });

    it('should apply light theme correctly', () => {
        applyTheme('light');
        expect(document.documentElement.classList.contains('dark')).toBe(false);
        expect(localStorage.getItem('color-theme')).toBe('light');
    });

    it('should toggle theme between light and dark', () => {
        const initialTheme = getPreferredTheme();
        toggleTheme();
        const newTheme = getPreferredTheme();
        expect(newTheme).toBe(initialTheme === 'dark' ? 'light' : 'dark');
    });

    it('should remember theme preference in localStorage', () => {
        applyTheme('dark');
        expect(localStorage.getItem('color-theme')).toBe('dark');
        
        applyTheme('light');
        expect(localStorage.getItem('color-theme')).toBe('light');
    });
});