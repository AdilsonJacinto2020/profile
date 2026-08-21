/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg-main)',
          subtle: 'var(--bg-subtle)',
          card: 'var(--bg-card)',
          hover: 'var(--bg-hover)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          medium: 'var(--border-medium)',
          strong: 'var(--border-strong)',
        },
        fg: {
          DEFAULT: 'var(--fg-main)',
          muted: 'var(--fg-muted)',
          faint: 'var(--fg-faint)',
        },
        accent: {
          DEFAULT: '#FF4D2E', // Swiss Red / Vermilion
          muted: '#E03E22',
          glow: 'rgba(255, 77, 46, 0.15)',
        },
        tech: {
          cyan: 'var(--tech-cyan)',
          green: 'var(--tech-green)',
          amber: 'var(--tech-amber)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        subtle: 'var(--shadow-subtle)',
        card: 'var(--shadow-card)',
        glow: '0 0 20px -4px rgba(255, 77, 46, 0.25)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
      animation: {
        blink: 'blink 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
