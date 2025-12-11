import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#545BFA',
      success: {
        DEFAULT: '#22c55e',
        subtle: '#dcfce7',
      },
      danger: {
        DEFAULT: '#ef4444',
        subtle: '#fee2e2',
      },
    }
  },
  shortcuts: [
    // Dark mode variants
    ['text-success', 'text-[#22c55e] dark:text-[#4ade80]'],
    ['text-danger', 'text-[#ef4444] dark:text-[#f87171]'],
    ['bg-success', 'bg-[#22c55e] dark:bg-[#4ade80]'],
    ['bg-danger', 'bg-[#ef4444] dark:bg-[#f87171]'],
    ['border-success', 'border-[#22c55e] dark:border-[#4ade80]'],
    ['border-danger', 'border-[#ef4444] dark:border-[#f87171]'],
    // Subtle variants
    ['text-success-subtle', 'text-[#166534] dark:text-[#86efac]'],
    ['text-danger-subtle', 'text-[#991b1b] dark:text-[#fca5a5]'],
    ['bg-success-subtle', 'bg-[#dcfce7] dark:bg-[#14532d]'],
    ['bg-danger-subtle', 'bg-[#fee2e2] dark:bg-[#450a0a]'],
  ],
  rules: [
    // Apply serif font to headings globally
    [/^heading-font$/, () => ({ 'font-family': "'Unna', serif" })],
  ],
})
