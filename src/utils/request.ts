/*
 * @Descripttion: axios底层配置文件
 * @Author: xxh
 * @Date: 2020-11-05 09:16:11
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 19:19:57
 */
import axios from "axios";
const BASE_URL =
  process.env.NODE_ENV === "production" ? "./" : "http://localhost:5000/";

// 1. 设置默认的请求头数据格式，以json格式传输与接收
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.headers.get["Accept"] = "application/json";

// 2. 创建新的axios实例
const service = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 60 * 1000, // 超时时间 单位是ms，这里设置了60s的超时时间
});

// 3. 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发请求前做的一些处理
    if (config.headers["Content-Type"] === "application/json") {
      config.data = JSON.stringify(config.data);
    }
    console.log(config);
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 4. 响应拦截器
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 捕获状态码，进行公共错误处理
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes("timeout")) {
        error.message = "服务器响应超时，请刷新当前页";
      } else {
        error.message = "连接服务器失败";
      }
    }
    // 如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response);
  }
);

// 5. 导出文件
export default service;
