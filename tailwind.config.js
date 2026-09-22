/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF',
          muted: 'rgba(0, 217, 255, 0.7)',
          glow: 'rgba(0, 217, 255, 0.35)',
        },
        'accent-cyan': '#8BE9FD',
        'border-cyan': 'rgba(0, 217, 255, 0.2)',
        'border-cyan-hover': 'rgba(0, 217, 255, 0.6)',
        'muted-text': '#94A3B8',
        dark: {
          950: '#000000',
          900: '#04070d',
          850: '#080d19',
          800: '#0d1527',
          700: '#162238',
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(0, 217, 255, 0.35)',
        'glow-primary-lg': '0 0 35px rgba(0, 217, 255, 0.5)',
        'glow-box': '0 0 15px rgba(0, 217, 255, 0.25)',
      },
      letterSpacing: {
        'widest-cyber': '0.3em',
        'ultra-cyber': '0.5em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-start infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
