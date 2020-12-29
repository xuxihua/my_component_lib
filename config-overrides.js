/*
 * @Descripttion: 扩展webpack基本配置
 * @Author: xxh
 * @Date: 2020-11-13 15:34:35
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-29 10:47:49
 */
// 引入 react-app-rewired 添加 babel 插件的函数
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const path = require("path");
// 关闭打包后sourcemap，防止静态文件夹中会有很多的css和js的map文件产生
process.env.GENERATE_SOURCEMAP = "false";

module.exports = override(
  // 扩展antd配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  // 扩展less配置
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        // 利用了less-loader的modifyVars来进行主题配置
        "@primary-color": "#1890ff", // 全局主色
        "@link-color": "#1890ff", // 链接色
        "@success-color": "#52c41a", // 成功色
        "@warning-color": "#faad14", // 警告色
        "@error-color": "#f5222d", // 错误色
        "@font-size-base": "14px", // 主字号
        "@heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
        "@text-color": "#333333", // 主文本色
        "@text-color-secondary": "#666666", // 次文本色
        "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
        "@border-color-base": "#d9d9d9", // 边框色
        "@box-shadow-base":
          "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
        "@background-color-light": '#8b572a'
      },
    },
  }),
  // 扩展支持修饰器
  addDecoratorsLegacy(),
  // 扩展@指令符号
  addWebpackAlias({
    "@": path.resolve(__dirname, "src/"),
  }),
  // 扩展热更新配置
  (config, env) => {
    config = rewireReactHotLoader(config, env);
    return config;
  }
);
