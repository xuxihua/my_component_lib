/*
 * @Descripttion: api接口文件
 * @Author: xxh
 * @Date: 2020-11-13 19:22:40
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 09:37:34
 */
import http from "../utils/http";
export default {
  getHome(params?: any) {
    return http.get(`/home`, params);
  },
  getData(params?: any) {
    return http.get(`api/getData`, params);
  },
  setData(params?: any) {
    return http.post(`api/setData`, params);
  },
  uploadImages(params?: any) {
    return http.form(`api/uploadImages`, params);
  },
};
