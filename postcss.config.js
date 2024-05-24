module.exports = {
  plugins: [
    require("postcss-pxtorem")({
      rootValue: 19.2,
      propList: ["*"],
      selectorBlackList: ["html"],
      minPixelValue: 1,
    }),
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions"],
    }),
  ],
};
