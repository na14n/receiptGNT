const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: 'class',

  theme: {
    extend: {}
  },

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },

  plugins: [require('daisyui')]
};

module.exports = config;