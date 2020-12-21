import React from "react";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

const dataX = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const data = [220, 182, 191, 234, 290, 330, 360];
const colorList = [
  "#0bebf9",
  "#07bcf8",
  "#f488f2",
  "#fcf367",
  "#fcf912",
  "#fa14c6",
  "#184dfa",
];
const option: any = {
  xAxis: {
    data: dataX,
  },
  yAxis: {},
  series: [
    {
      type: "bar",
      name: "left",
      barWidth: 34,
      itemStyle: {
        normal: {
          // color: function (params: any) {
          //   return colorList[params.dataIndex];
          // },
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#FFC95A", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#FFB43B", // 50% 处的颜色
              },
              {
                offset: 0.5,
                color: "#CF7802", // 50% 处的颜色
              },
              {
                offset: 1,
                color: "#CE7701", // 100% 处的颜色
              },
            ],
            false
          ),
        },
      },
      data: data,
    },
    // {
    //   name: "right",
    //   tooltip: {
    //     show: false,
    //   },
    //   type: "bar",
    //   barWidth: 17,
    //   itemStyle: {
    //     normal: {
    //       color: function (params: any) {
    //         // var colorList = [
    //         //   "#0bebf9",
    //         //   "#07bcf8",
    //         //   "#f488f2",
    //         //   "#fcf367",
    //         //   "#fcf912",
    //         //   "#fa14c6",
    //         //   "#184dfa",
    //         // ];
    //         // if (params.dataIndex >= colorList.length) {
    //         //   let index = params.dataIndex - colorList.length;
    //         // }
    //         return colorList[params.dataIndex];
    //       },
    //       // barBorderRadius: [0, 0, 0, 0],
    //     },
    //   },
    //   data: data,
    //   barGap: 0,
    // },
    {
      name: "top",
      tooltip: {
        show: false,
      },
      type: "pictorialBar",
      itemStyle: {
        normal: {
          // color: function (params: any) {
          //   return colorList[params.dataIndex];
          // },
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#FFD789", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#FFD789", // 100% 处的颜色
              },
            ],
            false
          ),
          borderWidth: 1,
          borderColor: "#CDA760",
          label: {
            show: true,
            position: "top",
          },
        },
      },
      symbol: "diamond",
      symbolSize: ["32", "16"],
      symbolOffset: ["0", "-9"],
      symbolPosition: "end",
      data: data,
      z: 3,
    },
    {
      name: "bottom",
      tooltip: {
        show: false,
      },
      type: "pictorialBar",
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#FFC95A", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "#FFB43B", // 50% 处的颜色
              },
              {
                offset: 0.5,
                color: "#CF7802", // 50% 处的颜色
              },
              {
                offset: 1,
                color: "#CE7701", // 100% 处的颜色
              },
            ],
            false
          ),
        },
      },
      symbol: "diamond",
      symbolSize: ["34", "18"],
      symbolOffset: ["0", "9"],
      symbolPosition: "start",
      data: data,
      z: 3,
    },
  ],
};

const Echarts3DBar = () => (
  <ReactEcharts
    option={option}
    style={{ height: "500px", width: "1000px" }}
    className={"echarts-3DBar"}
  />
);

export default Echarts3DBar;
