/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'system-ui'],
        sans: ['Roboto', 'system-ui'],
      },
      transitionDuration: {
        400: '400ms',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
        'standard-decelerate': 'cubic-bezier(0, 0, 0, 1)',
        'standard-accelerate': 'cubic-bezier(0.3, 0, 1, 1)',
        'emphasized-decelerate': 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
        'emphasized-accelerate': 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
        bounce: 'cubic-bezier(.25,1.55,.65,.97)',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
            scale: 0,
          },
          to: {
            opacity: 1,
            scale: 1,
          },
        },
        'fade-in-snackbar': {
          from: {
            opacity: 0,
            scale: '1 0',
          },
          to: {
            opacity: 1,
            scaleY: '1',
          },
        },
        'fade-in-snackbar-body': {
          from: {
            scale: '1 2',
          },
          to: {
            scaleY: '1',
          },
        },
        'fade-out-snackbar': {
          to: {
            opacity: 0,
          },
        },
        'fade-in-settings': {
          from: {
            opacity: 0,
            translate: '-50% 0',
          },
          to: {
            opacity: 1,
            translate: 0,
          },
        },
        'fade-in-title': {
          from: {
            opacity: 0,
            transform: 'scale(2)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        'fade-in-section': {
          from: {
            opacity: 0,
            scale: '0.94',
          },
          to: {
            opacity: 1,
            scale: '1',
          },
        },
        'fade-in-aside': {
          from: {
            opacity: 0,
            scale: '0.8 1',
          },
          to: {
            opacity: 1,
            scale: '1',
          },
        },
      },
      animation: {
        'fade-in-screen': 'fade-in 400ms cubic-bezier(0.05, 0.7, 0.1, 1.0) backwards',
        'fade-out-screen': 'fade-in 200ms cubic-bezier(0.3, 0.0, 0.8, 0.15) forward reverse',
        'fade-in-standard': 'fade-in 250ms cubic-bezier(0, 0, 0, 1) backwards',
        'fade-out-standard': 'fade-in 200ms cubic-bezier(0.3, 0, 1, 1) forward reverse',
        'fade-in-snackbar': 'fade-in-snackbar 500ms cubic-bezier(0, 0, 0, 1) backwards',
        'fade-in-snackbar-body': 'fade-in-snackbar-body 500ms cubic-bezier(0, 0, 0, 1) backwards',
        'fade-out-snackbar': 'fade-out-snackbar 200ms cubic-bezier(0.3, 0, 1, 1) forwards',
        'fade-in-settings': 'fade-in-settings 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0) both',
        'fade-in-title': 'fade-in-title 250ms cubic-bezier(0.05, 0.7, 0.1, 1.0) both',
        'fade-in-section': 'fade-in-section 500ms cubic-bezier(0.05, 0.7, 0.1, 1.0) both',
        'fade-in-aside': 'fade-in-aside 700ms cubic-bezier(0.05, 0.7, 0.1, 1.0) both',
      },
    },
    colors: {
      primary: 'var(--md-sys-color-primary)',
      'on-primary': 'var(--md-sys-color-on-primary)',
      'primary-container': 'var(--md-sys-color-primary-container)',
      'on-primary-container': 'var(--md-sys-color-on-primary-container)',
      'primary-fixed': 'var(--md-sys-color-primary-fixed)',
      'on-primary-fixed': 'var(--md-sys-color-on-primary-fixed)',
      'primary-fixed-dim': 'var(--md-sys-color-primary-fixed-dim)',
      'on-primary-fixed-variant': 'var(--md-sys-color-on-primary-fixed-variant)',
      secondary: 'var(--md-sys-color-secondary)',
      'on-secondary': 'var(--md-sys-color-on-secondary)',
      'secondary-container': 'var(--md-sys-color-secondary-container)',
      'on-secondary-container': 'var(--md-sys-color-on-secondary-container)',
      'secondary-fixed': 'var(--md-sys-color-secondary-fixed)',
      'on-secondary-fixed': 'var(--md-sys-color-on-secondary-fixed)',
      'secondary-fixed-dim': 'var(--md-sys-color-secondary-fixed-dim)',
      'on-secondary-fixed-variant': 'var(--md-sys-color-on-secondary-fixed-variant)',
      tertiary: 'var(--md-sys-color-tertiary)',
      'on-tertiary': 'var(--md-sys-color-on-tertiary)',
      'tertiary-container': 'var(--md-sys-color-tertiary-container)',
      'on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',
      'tertiary-fixed': 'var(--md-sys-color-tertiary-fixed)',
      'on-tertiary-fixed': 'var(--md-sys-color-on-tertiary-fixed)',
      'tertiary-fixed-dim': 'var(--md-sys-color-tertiary-fixed-dim)',
      'on-tertiary-fixed-variant': 'var(--md-sys-color-on-tertiary-fixed-variant)',
      error: 'var(--md-sys-color-error)',
      'error-container': 'var(--md-sys-color-error-container)',
      'on-error-container': 'var(--md-sys-color-on-error-container)',
      outline: 'var(--md-sys-color-outline)',
      background: 'var(--md-sys-color-background)',
      'on-background': 'var(--md-sys-color-on-background)',
      surface: 'var(--md-sys-color-surface)',
      'on-surface': 'var(--md-sys-color-on-surface)',
      'surface-variant': 'var(--md-sys-color-surface-variant)',
      'on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
      'inverse-surface': 'var(--md-sys-color-inverse-surface)',
      'inverse-on-surface': 'var(--md-sys-color-inverse-on-surface)',
      'inverse-primary': 'var(--md-sys-color-inverse-primary)',
      shadow: 'var(--md-sys-color-shadow)',
      'surface-tint': 'var(--md-sys-color-surface-tint)',
      'outline-variant': 'var(--md-sys-color-outline-variant)',
      scrim: 'var(--md-sys-color-scrim)',
      'surface-container-highest': 'var(--md-sys-color-surface-container-highest)',
      'surface-container-high': 'var(--md-sys-color-surface-container-high)',
      'surface-container': 'var(--md-sys-color-surface-container)',
      'surface-container-low': 'var(--md-sys-color-surface-container-low)',
      'surface-container-lowest': 'var(--md-sys-color-surface-container-lowest)',
      'surface-bright': 'var(--md-sys-color-surface-bright)',
      'surface-dim': 'var(--md-sys-color-surface-dim)',
      transparent: 'transparent',
      black: 'black',
      white: 'white',
    },
  },
  plugins: [],
};
