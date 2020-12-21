import React, { Component } from "react";
import MyCom from "../../../../components";
import { is, fromJS } from "immutable";

interface IProps {}
interface IState {}

export default class TabsPage extends Component<IProps, IState> {
  private tabsConfig = [{
    tabTitle: '学生学业成绩'
  }, {
    tabTitle: '学科建设'
  }, {
    tabTitle: '师资力量'
  }, {
    tabTitle: '学生活动'
  }, {
    tabTitle: '学校荣誉'
  }, {
    tabTitle: '测试'
  }]

  constructor(props: IProps) {
    super(props);
  }

  // ===========生命周期==========
  shouldComponentUpdate(nextProps: object, nextState: object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  render() {
    return <MyCom.TabsWithCarousel tabsData={this.tabsConfig}></MyCom.TabsWithCarousel>;
  }
}
