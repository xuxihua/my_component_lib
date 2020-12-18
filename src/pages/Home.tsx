import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { Layout } from "antd";
import HeaderCustom from "../components/HeaderCustom";
import SiderCustom from "../components/SiderCustom";
import { ISiderMenu, menu } from "../router/config";
import { Route } from "react-router";

const { Content, Footer } = Layout;

interface IProps {}

interface IState {
  msg: string;
  collapsed: boolean;
}

export default class Home extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      msg: "无",
      collapsed: false,
    };
  }

  shouldComponentUpdate(nextProps: object, nextState: object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  // ===========页面行为==========
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  renderMenuItem = (item: ISiderMenu) => {
    return <Route exact key={item.key} path={item.path} component={item.component} />;
  };

  renderSubMenu = (item: ISiderMenu): any => {
    return item.subs!.map((sub: ISiderMenu) =>
      sub.subs ? this.renderSubMenu(sub) : this.renderMenuItem(sub)
    );
  };

  render() {
    return (
      <Layout className="home">
        <SiderCustom collapsed={this.state.collapsed}></SiderCustom>
        <Layout>
          <HeaderCustom
            toggle={this.toggle}
            collapsed={this.state.collapsed}
          ></HeaderCustom>
          <Content className="main">
            {menu.menus.map((item: ISiderMenu) => (
              item.subs ? this.renderSubMenu(item) : this.renderMenuItem(item)
            ))}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
