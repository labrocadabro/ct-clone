import { expect, describe, test } from 'vitest'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.cjs'

describe('Tailwind Dark Mode Configuration', () => {
    const fullConfig = resolveConfig(tailwindConfig)

    test('Dark mode is configured', () => {
        expect(fullConfig.darkMode).toBe('class')
    })

    test('Twilight color palette is complete', () => {
        const twilightColors = fullConfig.theme.colors.twilight
        expect(twilightColors).toHaveProperty('light')
        expect(twilightColors).toHaveProperty('dark')
        
        // Check color depth
        expect(Object.keys(twilightColors.light)).toHaveLength(10)
        expect(Object.keys(twilightColors.dark)).toHaveLength(10)
    })

    test('Semantic color tokens are defined', () => {
        const semanticColors = [
            'background', 'text', 'primary', 
            'secondary', 'accent', 'success', 
            'error', 'warning', 'info'
        ]

        semanticColors.forEach(color => {
            expect(fullConfig.theme.colors[color]).toBeDefined()
            expect(fullConfig.theme.colors[color]).toHaveProperty('light')
            expect(fullConfig.theme.colors[color]).toHaveProperty('dark')
        })
    })

    test('Dark mode colors have contrast', () => {
        const colors = fullConfig.theme.colors
        
        // Basic contrast check: light and dark variants should be different
        Object.keys(colors).forEach(colorGroup => {
            if (typeof colors[colorGroup] === 'object' && colors[colorGroup].light && colors[colorGroup].dark) {
                expect(colors[colorGroup].light).not.toBe(colors[colorGroup].dark)
            }
        })
    })
})