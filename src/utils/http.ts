/*
 * @Descripttion: axios请求类型配置文件
 * @Author: xxh
 * @Date: 2020-11-05 09:20:09
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 18:43:26
 */
import { Method } from "axios";
import request from "./request";

const http = {
  get(url: string, params?: any) {
    let config = {
      url: url,
      method: 'get' as Method,
      params: null as any | null
    };
    if (params) config.params = params;
    return request(config);
  },
  post(url: string,  params?: any, headers = { "Content-Type": "application/json" }) {
    let config = {
      method: "post" as Method,
      url: url,
      data: null as any | null,
      headers,
    };
    if (params) config.data = params;
    return request(config);
  },
  put(url: string,  params?: any, headers = { "Content-Type": "application/json" }) {
    let config = {
      method: "put" as Method,
      url: url,
      params: null as any | null,
      headers,
    };
    if (params) config.params = params;
    return request(config);
  },
  delete(url: string,  params?: any, headers = { "Content-Type": "application/json" }) {
    let config = {
      method: "delete" as Method,
      url: url,
      params: null as any | null,
      headers,
    };
    if (params) config.params = params;
    return request(config);
  },
  form(url: string,  params?: any, headers = { "Content-Type": "multipart/form-data" }) {
    let config = {
      method: "post" as Method,
      url: url,
      data: null  as any | null,
      headers,
    };
    if (params) config.data = params;
    return request(config);
  },
};

export default http;
