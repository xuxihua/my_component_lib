/*
 * @Descripttion:
 * @Author: xxh
 * @Date: 2020-11-30 19:06:03
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-30 19:22:32
 */

/**
 * @name: 将时间戳转换为天时分
 * @param {type}
 * @return {type}
 */
export const formatDuring = (mss: number): string => {
  let days = parseInt((mss / (1000 * 60 * 60 * 24)).toString());
  let hours = parseInt(
    ((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString()
  );
  let minutes = parseInt(((mss % (1000 * 60 * 60)) / (1000 * 60)).toString());
  let seconds = (mss % (1000 * 60)) / 1000;
  return days + "天" + hours + "小时" + minutes + "分";
};

/**
 * @name: 将时间戳转换为时分秒
 * @param {type}
 * @return {type}
 */
export const getToday = (mss: number): string => {
  let date = new Date(mss);
  let year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day: string | number = date.getDate();
  day = day < 10 ? "0" + day : day;
  return year + "/" + month + "/" + day;
};
