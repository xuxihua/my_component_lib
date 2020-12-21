import React, { Component } from "react";
import MyCom from "../../../../components";
import { is, fromJS } from "immutable";

interface IProps {}
interface IState {}

export default class TabsPage extends Component<IProps, IState> {

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
    return <MyCom.Echarts3DBar></MyCom.Echarts3DBar>;
  }
}
