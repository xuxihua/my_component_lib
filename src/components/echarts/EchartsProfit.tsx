import React from "react";
import ReactEcharts from "echarts-for-react";
import { getToday } from "../../utils/time";

let date = [];
let time = new Date().getTime();
for (let i = 6; i >= 0; i--) {
  let cutTime = time - i * 24 * 3600000;
  let str = getToday(cutTime);
  date.push(str);
}

const option: any = {
  title: {
    text: "本周收入、支出、净利润统计",
    left: "50%",
    top: "20px",
    show: true,
    textAlign: "center",
    textStyle: {
      fontSize: "14",
    },
  },
  tooltip: {
    trigger: "axis",
  },
  dataset: {
    source: [
      ["日期", "收入", "支出", "净利润"],
      ["周一", 5000, 2000, 3000],
      ["周二", 4050, 1820, 2230],
      ["周三", 4600, 1500, 3100],
      ["周四", 8888, 1000, 7888],
      ["周五", 0, 0, 0],
      ["周六", 0, 0, 0],
      ["周日", 0, 0, 0],
    ],
  },
  xAxis: {
    type: "category",
    boundaryGap: true,
  },
  yAxis: {
    name: "元"
  },
  legend: {
    data: ["收入", "支出", "净利润"],
    right: "20",
    top: "20"
  },
  series: [
    {
      type: "bar",
    },
    {
      type: "bar",
    },
    {
      type: "bar",
    },
  ],
};

const EchartsProfit = () => (
  <ReactEcharts
    option={option}
    style={{ height: "350px" }}
    className={"echarts-profit"}
  />
);

export default EchartsProfit;
