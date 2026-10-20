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
        // 60% Dominant: Charcoal Scale
        canvas: '#1F1F1F',
        surface: '#262626',
        'surface-elevated': '#2E2E2E',
        'surface-hover': '#383838',

        // 30% Secondary: Structural Borders & Off-White Typography Scale
        'border-subtle': '#3D3D3D',
        'border-hover': '#525252',
        'text-primary': '#F4F4F4',
        'text-secondary': '#CCCCCC',
        'text-muted': '#9E9E9E',

        // 10% Accent: #DEB084 Warm Caramel/Sand (from photo reference)
        accent: {
          DEFAULT: '#DEB084',
          hover: '#CFA175',
          light: '#E8C5A2',
          glow: 'rgba(222, 176, 132, 0.25)',
          subtle: 'rgba(222, 176, 132, 0.12)',
          border: 'rgba(222, 176, 132, 0.40)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
