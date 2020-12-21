/*
 * @Descripttion: home reducer
 * @Author: xxh
 * @Date: 2020-11-13 19:27:26
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-21 15:11:17
 */
import * as home from "./action-type";
import { HomeStoreState, MenuStoreState } from "../../interfaces/store/homeStoreState.interface";
import { modifyActionType } from "./action";

let initialState: HomeStoreState = {
  name: "",
  sex: "",
  phoneNo: "",
};

let menuState: MenuStoreState = {
  menuKey: ""
}

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

export const menuData = (
  state = menuState,
  action: modifyActionType
): MenuStoreState => {
  switch (action.type) {
    case home.SAVEMENUKEY:
      return { ...state, ...action.value };
    default:
      return state;
  }
};
