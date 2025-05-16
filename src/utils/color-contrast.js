/**
 * Utility functions for color contrast validation
 * Implements WCAG 2.1 contrast ratio calculation
 */

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color code
 * @returns {Array} RGB values
 */
export function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Handle 3-digit hex codes by doubling each character
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // Handle 6-digit hex codes
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return [r, g, b];
}

/**
 * Calculate relative luminance of a color
 * @param {Array} rgb - RGB color values
 * @returns {number} Relative luminance
 */
export function calculateRelativeLuminance(rgb) {
  const [r, g, b] = rgb.map(c => {
    c /= 255;
    return c <= 0.03928 
      ? c / 12.92 
      : Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate contrast ratio between two colors
 * @param {string} color1 - First color (hex)
 * @param {string} color2 - Second color (hex)
 * @returns {number} Contrast ratio
 */
export function calculateContrastRatio(color1, color2) {
  // Validate input
  if (!color1 || !color2) {
    throw new Error('Both colors must be provided');
  }

  // Convert colors to RGB
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  // Calculate luminance
  const l1 = calculateRelativeLuminance(rgb1);
  const l2 = calculateRelativeLuminance(rgb2);

  // Calculate contrast ratio
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Check if color contrast meets WCAG 2.1 Level AA standard
 * @param {string} foreground - Foreground color (hex)
 * @param {string} background - Background color (hex)
 * @returns {boolean} Whether contrast meets standard
 */
export function meetsContrastStandard(foreground, background) {
  try {
    const contrastRatio = calculateContrastRatio(foreground, background);
    
    // WCAG 2.1 Level AA requires:
    // - 4.5:1 for normal text
    // - 3:1 for large text (18pt or 14pt bold)
    return contrastRatio >= 4.5;
  } catch (error) {
    console.error('Contrast validation error:', error);
    return false;
  }
};