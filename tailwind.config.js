export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f5f3f0',
          100: '#e6e0d7',
          200: '#d4c6b0',
          300: '#bba588',
          400: '#a58b6f',
          500: '#8c7259',
          600: '#705a47',
          700: '#574638',
          800: '#3d322a',
          900: '#241d1a'
        }
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #8c7259 0%, #3d322a 100%)',
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}