import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Header } = Layout;

interface IProps {
  collapsed: boolean;
  toggle: () => void;
}
interface IState {}

export default class HeaderCustom extends Component<IProps, IState> {
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
    return (
      <Header>
        {React.createElement(
          this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger",
            onClick: this.props.toggle,
          }
        )}
      </Header>
    );
  }
}
