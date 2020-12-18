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
    text: "模板数量统计",
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
  xAxis: {
    type: "category",
    boundaryGap: true,
    data: date,
  },
  yAxis: {
    name: "个",
    type: "value",
  },
  legend: {
    data: ["模板新增量", "模板总量"],
    right: "20",
    top: "20"
  },
  series: [
    {
      name: "模板新增量",
      data: [5, 7, 8, 10, 2, 12, 5],
      type: "line",
      smooth: true,
      showSymbol: false,
      label: {
        show: true
      }
    },
    {
      name: "模板总量",
      data: [100, 107, 115, 125, 127, 139, 144],
      type: "bar",
      itemStyle: {
        color: "rgba(249, 185, 144, 1)",
      },
      label: {
        show: false
      }
    },
  ],
};

const EchartsTemplates = () => (
  <ReactEcharts
    option={option}
    style={{ height: "350px", width: "300px" }}
    className={"echarts-templates"}
  />
);

export default EchartsTemplates;
