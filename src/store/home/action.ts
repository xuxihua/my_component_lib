/*
 * @Descripttion: home action
 * @Author: xxh
 * @Date: 2020-11-13 19:27:20
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-16 11:14:40
 */
import * as home from './action-type';

export interface SaveFormDataAction {
  type: home.SAVEFORMDATA;
  value: Object
}

export interface ClearFormAction {
  type: home.CLEARFORM;
}

// 定义 modifyActionType 类型，包含 SaveFormDataAction 和 ClearFormAction 接口类型
export type modifyActionType = SaveFormDataAction | ClearFormAction;

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