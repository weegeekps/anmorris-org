module.exports = {
  purge: ["content/**/*.md", "layouts/**/*.html", "themes/2021-design/layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    color: {
      foreground: "#0a0a0a",
      background: "#f0f0f0",
      link: {
        primary: "#0050a0",
        hover: "#00458a",
      },
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
