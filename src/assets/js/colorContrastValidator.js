/**
 * Color Contrast Validation Utility
 * Implements WCAG 2.1 Level AA contrast ratio calculation and validation
 */
class ColorContrastValidator {
  /**
   * Convert a hex color to RGB
   * @param {string} hex - Hex color code
   * @returns {Object} RGB color object
   */
  static hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace(/^#/, '');

    // Handle 3-digit and 6-digit hex codes
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  /**
   * Calculate relative luminance of a color
   * @param {Object} rgb - RGB color object
   * @returns {number} Relative luminance value
   */
  static calculateRelativeLuminance(rgb) {
    const { r, g, b } = rgb;
    const sRGB = [r, g, b].map(color => {
      const sRGBValue = color / 255;
      return sRGBValue <= 0.03928
        ? sRGBValue / 12.92
        : Math.pow((sRGBValue + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
  }

  /**
   * Calculate contrast ratio between two colors
   * @param {string} color1 - First color hex code
   * @param {string} color2 - Second color hex code
   * @returns {number} Contrast ratio
   */
  static calculateContrastRatio(color1, color2) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);

    const l1 = this.calculateRelativeLuminance(rgb1);
    const l2 = this.calculateRelativeLuminance(rgb2);

    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);

    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * Check if colors meet WCAG 2.1 Level AA contrast requirements
   * @param {string} foreground - Foreground color hex code
   * @param {string} background - Background color hex code
   * @returns {boolean} Whether colors meet contrast requirements
   */
  static meetsContrastRequirements(foreground, background) {
    const contrastRatio = this.calculateContrastRatio(foreground, background);
    return contrastRatio >= 4.5; // WCAG 2.1 Level AA standard
  }

  /**
   * Find a compliant alternative color
   * @param {string} originalColor - Original color hex code
   * @param {string} backgroundColor - Background color hex code
   * @param {string[]} colorPalette - Array of potential alternative colors
   * @returns {string|null} A compliant color or null
   */
  static findCompliantColor(originalColor, backgroundColor, colorPalette) {
    for (const color of colorPalette) {
      if (this.meetsContrastRequirements(color, backgroundColor)) {
        return color;
      }
    }
    return null;
  }
}

export default ColorContrastValidator;