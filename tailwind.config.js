// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef7fd',
          100: '#dceffa',
          200: '#b9dff6',
          300: '#8acbf0',
          400: '#58aee6', // Gradient start
          500: '#3991d9',
          600: '#2476c7', // Gradient end
          700: '#1d5ea0',
          800: '#1a4c80',
          900: '#183e69',
        },
        secondary: {
          50:  '#fff8f2',
          100: '#fff0e6',
          200: '#ffdfc2',
          300: '#ffcb99', // Gradient start
          400: '#ffb270',
          500: '#ff9447',
          600: '#ff7520',
          700: '#e65c00', // Gradient end
          800: '#cc4d00',
          900: '#a63e00',
        },
        accent1: {
          50:  '#edfdf9',
          100: '#d0f7ef',
          200: '#a6f0e2',
          300: '#7bead2', // Gradient start
          400: '#42d9b9',
          500: '#2bbda0',
          600: '#1e9e85',
          700: '#1a7f6b',
          800: '#166557',
          900: '#0a4d3a',
        },
        accent2: {
          50:  '#f0f5ff',
          100: '#e6edff',
          200: '#d1e0ff',
          300: '#b3ceff',
          400: '#7faaff', // Gradient end
          500: '#5785f6',
          600: '#3366e6',
          700: '#254fd9',
          800: '#1f40b3',
          900: '#1a3366',
        },
        gray: {
          50:  '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        success: '#27ae60',
        warning: '#f39c12',
        danger: '#e74c3c',
        info: '#3498db',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1' }],
        'display-2': ['4rem', { lineHeight: '1.1' }],
        'display-3': ['3.5rem', { lineHeight: '1.1' }],
        'h1': ['3rem', { lineHeight: '1.3' }],
        'h2': ['2.5rem', { lineHeight: '1.3' }],
        'h3': ['2rem', { lineHeight: '1.3' }],
        'h4': ['1.75rem', { lineHeight: '1.5' }],
        'h5': ['1.5rem', { lineHeight: '1.5' }],
        'h6': ['1.25rem', { lineHeight: '1.5' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.7' }],
        'caption': ['0.75rem', { lineHeight: '1.5' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #58aee6 0%, #2476c7 100%)',
        'secondary-gradient': 'linear-gradient(135deg, #ffcb99 0%, #e65c00 100%)',
        'accent-gradient': 'linear-gradient(135deg, #7bead2 0%, #7faaff 100%)',
        'diagonal-gradient': 'linear-gradient(45deg, #58aee6 0%, #7bead2 100%)',
        'radial-gradient': 'radial-gradient(circle, #7bead2 0%, #2476c7 100%)',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(33, 37, 41, 0.05)',
        'md': '0 4px 6px -1px rgba(33, 37, 41, 0.1), 0 2px 4px -1px rgba(33, 37, 41, 0.06)',
        'lg': '0 10px 15px -3px rgba(33, 37, 41, 0.1), 0 4px 6px -2px rgba(33, 37, 41, 0.05)',
        'xl': '0 20px 25px -5px rgba(33, 37, 41, 0.1), 0 10px 10px -5px rgba(33, 37, 41, 0.04)',
        '2xl': '0 25px 50px -12px rgba(33, 37, 41, 0.25)',
        'card': '0 4px 20px 0 rgba(33, 37, 41, 0.08)',
        'card-hover': '0 10px 30px 0 rgba(33, 37, 41, 0.12)',
        'inner': 'inset 0 2px 4px 0 rgba(33, 37, 41, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'xs': '0.25rem',    // 4px
        'sm': '0.5rem',     // 8px
        'md': '0.75rem',    // 12px
        'lg': '1rem',       // 16px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        'full': '9999px',
      },
      spacing: {
        '0': '0',
        '1': '0.25rem',     // 4px
        '2': '0.5rem',      // 8px
        '3': '0.75rem',     // 12px
        '4': '1rem',        // 16px
        '5': '1.25rem',     // 20px
        '6': '1.5rem',      // 24px
        '8': '2rem',        // 32px
        '10': '2.5rem',     // 40px
        '12': '3rem',       // 48px
        '16': '4rem',       // 64px
        '20': '5rem',       // 80px
        '24': '6rem',       // 96px
        '32': '8rem',       // 128px
        '40': '10rem',      // 160px
        '48': '12rem',      // 192px
        '56': '14rem',      // 224px
        '64': '16rem',      // 256px
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'colors': 'color, background-color, border-color',
        'opacity': 'opacity',
        'shadow': 'box-shadow',
        'transform': 'transform',
      },
      transitionTimingFunction: {
        'linear': 'linear',
        'ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'dark'],
      textColor: ['active', 'dark'],
      borderColor: ['active', 'dark'],
      opacity: ['dark'],
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};