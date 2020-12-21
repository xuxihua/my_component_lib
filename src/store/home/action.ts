/*
 * @Descripttion: home action
 * @Author: xxh
 * @Date: 2020-11-13 19:27:20
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-21 15:11:35
 */
import * as home from './action-type';

export interface SaveFormDataAction {
  type: home.SAVEFORMDATA;
  value: Object
}

export interface ClearFormAction {
  type: home.CLEARFORM;
}

export interface SaveMenuKeyAction {
  type: home.SAVEMENUKEY;
  value: object
}

// 定义 modifyActionType 类型，包含 SaveFormDataAction 和 ClearFormAction 接口类型
export type modifyActionType = SaveFormDataAction | ClearFormAction | SaveMenuKeyAction;

// 保存表单数据
export const saveFormData = (value: Object): SaveFormDataAction => {
  return {
    type: home.SAVEFORMDATA,
    value
  }
}

// 清除表单数据
export const clearForm = (): ClearFormAction => {
  return {
    type: home.CLEARFORM
  }
}

// 保存菜单key
export const saveMenuKey = (value: object): SaveMenuKeyAction => {
  return {
    type: home.SAVEMENUKEY,
    value
  }
}