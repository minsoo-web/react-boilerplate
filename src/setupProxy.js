const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "YOUR_BACK_END_POINT",
      pathRewrite: { "^/api": "" },
      changeOrigin: true
    })
  );
};
