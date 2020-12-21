/*
 * @Descripttion: antd tab自动轮播触发+手动点击时暂停
 * @Author: xxh
 * @Date: 2020-12-18 14:16:30
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-21 13:55:46
 */

import React, { Component } from "react";
import { is, fromJS } from "immutable";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface IProps {
  tabsData: any[];
}
interface IState {
  activeKey: string;
  timer: NodeJS.Timeout | null;
}

export default class TabsWithCarousel extends Component<IProps, IState> {
  private tabsBox: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.state = {
      // define this.state in constructor
      activeKey: "1",
      timer: null,
    };
    this.tabsBox = React.createRef();
  }

  // ===========生命周期==========
  componentDidMount() {
    console.log(this.props.tabsData);
    this.controlCarousel("start");
  }

  shouldComponentUpdate(nextProps: object, nextState: object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  componentWillUnmount() {
    if (this.state.timer) clearInterval(this.state.timer);
  }

  // ===========页面行为=========
  /**
   * @name: 处理点击tab标签事件
   * @param {string} key
   * @return {*}
   */
  handleChange = (key: string): void => {
    console.log(key);
    this.setState({ activeKey: key });
  };
  /**
   * @name: 控制tabs轮播(ns轮播一次)
   * @param {string} type 启动or关闭轮播
   * @return {*}
   */
  controlCarousel = (type: string): void => {
    if (type === "stop") {
      if (this.state.timer) {
        clearInterval(this.state.timer);
        this.setState({ timer: null });
      }
    } else if (type === "start" && !this.state.timer) {
      let timer = setInterval(() => {
        let curActiveKey = this.state.activeKey;
        let length = document.querySelectorAll(".tab-pane").length;
        let newActiveKey = (Number(curActiveKey) + 1).toString();
        newActiveKey = Number(newActiveKey) > length ? "1" : newActiveKey;
        console.log(newActiveKey);
        this.setState({ activeKey: newActiveKey });
      }, 3000);
      this.setState({ timer: timer });
    }
  };

  render() {
    return (
      <div className="TabsWithCarousel-box" ref={this.tabsBox}>
        <Tabs
          onChange={this.handleChange}
          type="card"
          activeKey={this.state.activeKey}
          onMouseOver={this.controlCarousel.bind(this, "stop")}
          onMouseOut={this.controlCarousel.bind(this, "start")}
        >
          {this.props.tabsData.map((o, index) => (
            <TabPane className="tab-pane" tab={o.tabTitle} key={index+1}>
              {o.tabTitle}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
