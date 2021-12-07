module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["./themes/2021-design/assets/css"],
    }),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
