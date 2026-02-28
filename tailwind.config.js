/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0B1D3A',
          DEFAULT: '#1A4A9A',
          bright: '#2563EB',
          light: '#3B82F6',
          sky: '#60A5FA',
          pale: '#EFF6FF',
        },
        navy: {
          dark: '#080E1F',
          slate: '#0F172A',
        },
        text: {
          primary: '#0B1D3A',
          secondary: '#475569',
          muted: '#64748B',
          light: '#94A3B8',
        },
        border: {
          light: '#E2E8F0',
        },
        surface: {
          bg: '#FAFBFC',
          alt: '#F1F5F9',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
