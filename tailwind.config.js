module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        lg: '10px', // or your preferred blur value
      },
    },
  },
  plugins: [
    require('@tailwindcss/filters'), // Ensure this plugin is included
  ],
};