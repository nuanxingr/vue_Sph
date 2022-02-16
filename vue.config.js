module.exports = {
  lintOnSave: false, //关闭eslint校验工具的验证
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
        // pathRewrite: { '^/api': '' },
      },
    },
  },
};
