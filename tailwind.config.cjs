module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
      'custom': '0 2px 1px rgba(0, 0, 0, 0.1)',
      'custom-hover': '0 4px 4px rgba(0, 0, 0, 1.0)',
      },
    },
  },
  plugins: [],
}