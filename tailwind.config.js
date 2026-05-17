/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1a2f',
          900: '#0d2240',
          800: '#142b4d',
          700: '#1d3a63',
        },
        gold: {
          50: '#f7f2dc',
          100: '#e8d896',
          400: '#b89a3a',
          500: '#a08020',
          600: '#8b6f1c',
          700: '#6e5715',
        },
        cream: {
          50: '#fbfaf6',
          100: '#f3f1ec',
          200: '#e9e6dd',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"PingFang SC"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(10, 26, 47, 0.06), 0 6px 18px rgba(10, 26, 47, 0.05)',
        elevated: '0 4px 14px rgba(10, 26, 47, 0.08), 0 18px 40px rgba(10, 26, 47, 0.08)',
      },
    },
  },
  plugins: [],
}
