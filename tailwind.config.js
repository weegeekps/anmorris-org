module.exports = {
  purge: ["layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      foreground: "#0a0a0a",
      background: "#f0f0f0",
    },
    extend: {
      fontFamily: {
        body: ["source-sans-pro", "sans-serif"],
        header: ["futura-pt", "source-sans-pro", "sans-serif"],
        mono: [
          "source-code-pro",
          "Consolas",
          "Liberation Mono",
          "Courier",
          "monospace",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
