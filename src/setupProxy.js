/*
 * @Descripttion: 设置代理
 * @Author: xxh
 * @Date: 2020-11-13 15:36:20
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 19:03:57
 */
// @ts-ignore
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      secure: false,
      changeOrigin: true,
    })
  );
};