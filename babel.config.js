module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            assets: "./src/assets",
            constants: "./src/constants",
            components: "./src/components",
            navigation: "./src/navigation",
            screens: "./src/screens",
            contexts: "./src/contexts",
          },
        },
      ],
    ],
  };
};
