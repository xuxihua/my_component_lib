import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { Layout } from "antd";
// import SiderMenu from "./SiderMenu";
import SiderMenu from "../containers/components/siderMenu";
import { Scrollbars } from "react-custom-scrollbars";
const { Sider } = Layout;

interface IProps {
  collapsed: boolean;
}
interface IState {}

export default class SiderCustom extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: object, nextState: object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  render() {
    return (
      <Sider
        style={{ overflowY: "auto" }}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo"></div>
        <Scrollbars>
          <SiderMenu menuData={{menuKey: ''}}></SiderMenu>
        </Scrollbars>
      </Sider>
    );
  }
}
