/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        card: 'hsl(var(--card))',
        muted: 'hsl(var(--muted))',
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
