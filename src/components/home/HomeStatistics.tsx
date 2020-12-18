import React, { Component } from "react";
import EchartsVisits from "../echarts/EchartsVisits";
import EchartsTemplates from "../echarts/EchartsTemplates";
import EchartsProfit from "../echarts/EchartsProfit";
import CommonBox from "../common/CommonBox"



const HomeStatistics = () => {
  return (
    <div className="home-statistics">
      <div className="home-statistics-cont">
        <EchartsVisits></EchartsVisits>
        <EchartsTemplates></EchartsTemplates>
      </div>
      <div className="home-statistics-cont">
        <EchartsProfit></EchartsProfit>
      </div>
    </div>
  );
};

export default HomeStatistics;
