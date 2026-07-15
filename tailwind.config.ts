import type { Config } from 'tailwindcss';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#171717',
        light: '#F5F5F3',
        accent: '#C8352E',
        'accent-crystal': '#B32509',
        card: '#1A1A1A',
        'card-border': '#2A2A2A',
        'text-primary': '#FFFFFF',
        'text-muted': '#A0A0A0',
        'text-dark': '#1A1A1A',
        'text-dark-muted': '#6B6B6B',
        gold: '#C8A96A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
