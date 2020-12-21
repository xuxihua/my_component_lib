/*
 * @Descripttion: antd 带选项卡控制的走马灯组件
 * @Author: xxh
 * @Date: 2020-12-18 11:08:30
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-18 15:11:30
 */
import React, { Component } from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselWithTab = () => {
  return (
    <div className="CarouselWithTab-box">
      <div className="car-tab">
        <ul className="flex">
          <li>tab1</li>
          <li>tab2</li>
          <li>tab3</li>
          <li>tab4</li>
        </ul>
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselWithTab;
