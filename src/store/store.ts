/*
 * @Descripttion: redux store
 * @Author: xxh
 * @Date: 2020-11-06 15:38:17
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-13 19:26:51
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import * as home from "./home/reducer";
import thunk from "redux-thunk";

let store = createStore(
  combineReducers({ ...home }), // 将子reducer合并成一个总reducer
  applyMiddleware(thunk) // 添加异步请求中间件
);

export default store;
