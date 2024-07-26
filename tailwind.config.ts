import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--background-primary)',
          foreground: 'var(--foreground-primary)',
          accent: 'var(--accent-primary)'
        },
        secondary: {
          foreground: 'var(--foreground-secondary)'
        },
        border: {
          primary: 'var(--border-primary)'
        }
      }
    },
  },
  plugins: [],
};
export default config;
