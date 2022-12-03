module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('/src/assets/pattern.png')",
      }),
    },
  },
  plugins: [],
};
