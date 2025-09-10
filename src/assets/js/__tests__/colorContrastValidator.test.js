import ColorContrastValidator from '../colorContrastValidator.js';

describe('ColorContrastValidator', () => {
  describe('hexToRgb', () => {
    test('converts 6-digit hex to RGB', () => {
      const rgb = ColorContrastValidator.hexToRgb('#FF0000');
      expect(rgb).toEqual({ r: 255, g: 0, b: 0 });
    });

    test('converts 3-digit hex to RGB', () => {
      const rgb = ColorContrastValidator.hexToRgb('#F00');
      expect(rgb).toEqual({ r: 255, g: 0, b: 0 });
    });
  });

  describe('calculateRelativeLuminance', () => {
    test('calculates luminance correctly', () => {
      const white = ColorContrastValidator.calculateRelativeLuminance({ r: 255, g: 255, b: 255 });
      const black = ColorContrastValidator.calculateRelativeLuminance({ r: 0, g: 0, b: 0 });
      
      expect(white).toBeCloseTo(1);
      expect(black).toBeCloseTo(0);
    });
  });

  describe('calculateContrastRatio', () => {
    test('calculates contrast ratio between black and white', () => {
      const contrastRatio = ColorContrastValidator.calculateContrastRatio('#FFFFFF', '#000000');
      expect(contrastRatio).toBeCloseTo(21);
    });

    test('calculates contrast ratio between similar colors', () => {
      const contrastRatio = ColorContrastValidator.calculateContrastRatio('#888888', '#A0A0A0');
      expect(contrastRatio).toBeGreaterThan(1);
      expect(contrastRatio).toBeLessThan(5);
    });
  });

  describe('meetsContrastRequirements', () => {
    test('validates high contrast colors', () => {
      expect(ColorContrastValidator.meetsContrastRequirements('#FFFFFF', '#000000')).toBe(true);
      expect(ColorContrastValidator.meetsContrastRequirements('#000000', '#FFFFFF')).toBe(true);
    });

    test('invalidates low contrast colors', () => {
      expect(ColorContrastValidator.meetsContrastRequirements('#888888', '#A0A0A0')).toBe(false);
    });
  });

  describe('findCompliantColor', () => {
    test('finds a compliant color from a palette', () => {
      const palette = ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF'];
      const backgroundColor = '#000000';
      
      const compliantColor = ColorContrastValidator.findCompliantColor('#888888', backgroundColor, palette);
      expect(compliantColor).toBe('#FFFFFF');
    });

    test('returns null if no compliant color found', () => {
      const palette = ['#888888', '#999999', '#AAAAAA'];
      const backgroundColor = '#000000';
      
      const compliantColor = ColorContrastValidator.findCompliantColor('#888888', backgroundColor, palette);
      expect(compliantColor).toBeNull();
    });
  });
});