module.exports = {
  mode: "jit",
  purge: [
    "src/**/*.{js,ts,jsx,tsx}",
    "src/**/**/*.{js,ts,jsx,tsx}",
    "src/**/*.css",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
