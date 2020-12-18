/*
 * @Descripttion: home reducer
 * @Author: xxh
 * @Date: 2020-11-13 19:27:26
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 15:21:17
 */
import * as home from "./action-type";
import { HomeStoreState } from "../../interfaces/store/homeStoreState.interface";
import { modifyActionType } from "./action";

let initialState: HomeStoreState = {
  name: "",
  sex: "",
  phoneNo: "",
};

export const formData = (
  state = initialState,
  action: modifyActionType
): HomeStoreState => {
  switch (action.type) {
    case home.SAVEFORMDATA:
      return { ...state, ...action.value };
    case home.CLEARFORM:
      return initialState;
    default:
      return state;
  }
};
