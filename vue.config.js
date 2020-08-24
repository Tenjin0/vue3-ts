module.exports = {
  chainWebpack: config => {
    config.module
      .rule("less")
      .oneOf("normal")
      .use("less-loader")
      .tap(options => {
        options.lessOptions = {
          javascriptEnabled: true
        };
        return options;
      });
  }
};
