import { describe, it, expect } from 'vitest';
import { 
  hexToRgb, 
  calculateRelativeLuminance, 
  calculateContrastRatio, 
  meetsContrastStandard 
} from './color-contrast.js';

describe('Color Contrast Utility', () => {
  describe('hexToRgb', () => {
    it('converts 6-digit hex to RGB', () => {
      expect(hexToRgb('#FFFFFF')).toEqual([255, 255, 255]);
      expect(hexToRgb('#000000')).toEqual([0, 0, 0]);
      expect(hexToRgb('#FF0000')).toEqual([255, 0, 0]);
    });

    it('converts 3-digit hex to RGB', () => {
      expect(hexToRgb('#FFF')).toEqual([255, 255, 255]);
      expect(hexToRgb('#000')).toEqual([0, 0, 0]);
    });
  });

  describe('calculateRelativeLuminance', () => {
    it('calculates relative luminance correctly', () => {
      expect(calculateRelativeLuminance([255, 255, 255])).toBeCloseTo(1);
      expect(calculateRelativeLuminance([0, 0, 0])).toBeCloseTo(0);
    });
  });

  describe('calculateContrastRatio', () => {
    it('calculates contrast ratio between black and white', () => {
      const ratio = calculateContrastRatio('#FFFFFF', '#000000');
      expect(ratio).toBeCloseTo(21);
    });

    it('throws error for invalid colors', () => {
      expect(() => calculateContrastRatio()).toThrow();
    });
  });

  describe('meetsContrastStandard', () => {
    it('validates high contrast colors', () => {
      expect(meetsContrastStandard('#FFFFFF', '#000000')).toBe(true);
      expect(meetsContrastStandard('#000000', '#FFFFFF')).toBe(true);
    });

    it('detects low contrast colors', () => {
      expect(meetsContrastStandard('#888888', '#AAAAAA')).toBe(false);
    });

    it('handles error cases', () => {
      expect(meetsContrastStandard()).toBe(false);
    });
  });
});