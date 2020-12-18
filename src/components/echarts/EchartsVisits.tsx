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
    text: "最近7天用户访问量统计",
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
    axisPointer: {
      lineStyle: {
        color: "#ddd",
      },
    },
    backgroundColor: "rgba(255,255,255,1)",
    padding: [5, 10],
    textStyle: {
      color: "#7588E4",
    },
    extraCssText: "box-shadow: 0 0 5px rgba(0,0,0,0.3)",
  },
  legend: {
    orient: "vertical",
    right: "20",
    top: "20"
  },
  xAxis: {
    type: "category",
    data: date,
    boundaryGap: false,
    splitLine: {
      show: true,
      interval: "auto",
      lineStyle: {
        color: ["#D4DFF5"],
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#609ee9",
      },
    },
    axisLabel: {
      margin: 10,
      textStyle: {
        fontSize: 10,
      },
    },
  },
  yAxis: {
    name: "人",
    type: "value",
    splitLine: {
      lineStyle: {
        color: ["#D4DFF5"],
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: "#609ee9",
      },
    },
    axisLabel: {
      margin: 0,
      textStyle: {
        fontSize: 8,
      },
    },
  },
  series: [
    {
      name: "昨日",
      type: "line",
      smooth: true,
      showSymbol: false,
      symbol: "circle",
      symbolSize: 6,
      data: ["1200", "1400", "808", "811", "626", "488", "1600"],
      areaStyle: {
        color: "rgba(216, 244, 247,1)"
      },
      itemStyle: {
        normal: {
          color: "#58c8da",
        },
      },
      lineStyle: {
        normal: {
          width: 3,
        },
      },
      label: {
        show: true
      }
    },
  ],
};

const EchartsVisits = () => (
  <ReactEcharts
    option={option}
    style={{ width: "350px", height: "350px" }}
    className={"echarts-visits"}
  />
);

export default EchartsVisits;
