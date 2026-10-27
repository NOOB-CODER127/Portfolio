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
        cyber: {
          950: '#05070a',
          900: '#0b0f17',
          850: '#0f1726',
          800: '#141e33',
          700: '#1d2a45',
          600: '#2c3e66',
          emerald: '#10b981',
          cyan: '#06b6d4',
          accent: '#3b82f6',
          neon: '#00f5a0'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px -3px rgba(16, 185, 129, 0.2)' },
          '100%': { boxShadow: '0 0 25px 2px rgba(16, 185, 129, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
