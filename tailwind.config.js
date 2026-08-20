/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3880FF',
          green: '#008A63',
        },
        background: 'var(--background)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
        heading: ['"PT Sans"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--text)',
            a: {
              color: '#3880FF',
              '&:hover': {
                color: '#008A63',
              },
            },
            h1: {
              color: 'var(--text)',
            },
            h2: {
              color: 'var(--text)',
              fontSize: '1.25em',
              fontWeight: '500',
            },
            h3: {
              color: 'var(--text)',
              fontSize: '1.125em',
              fontWeight: '500',
            },
            h4: {
              color: 'var(--text)',
              fontWeight: '500',
            },
            strong: {
              color: 'var(--text)',
            },
            blockquote: {
              color: 'var(--text)',
              borderLeftColor: '#3880FF',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
