/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          foreground: 'var(--primary-foreground)',
        },
        card: 'var(--card)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        chip: 'var(--chip)',
        link: 'var(--link)',
        accent: 'var(--chip)',
        'accent-foreground': 'var(--foreground)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '0.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04)',
      },
      transitionDuration: {
        200: '200ms',
      },
    },
  },
  plugins: [],
};
