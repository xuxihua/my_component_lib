import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { Menu } from "antd";
import { ISiderMenu, menu } from "../router/config";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

interface IProps {}
interface IState {
  collapsed: boolean;
}

export default class SideMenu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  // ========生命周期=========
  shouldComponentUpdate(nextProps: object, nextState: object) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  // ========页面行为=========
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (title: string) => {
    document.title = "app-" + title;
  }

  renderMenuItem = (item: ISiderMenu) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link to={item.path} onClick={this.handleClick.bind(this, item.title)}>
          <span>{item.title}</span>
        </Link>
      </Menu.Item>
    );
  };

  renderSubMenu = (item: ISiderMenu) => {
    return (
      <SubMenu
        key={item.key}
        icon={item.icon}
        title={
          <span>
            <span className="nav-text">{item.title}</span>
          </span>
        }
      >
        {item.subs!.map((sub: ISiderMenu) =>
          sub.subs ? this.renderSubMenu(sub) : this.renderMenuItem(sub)
        )}
      </SubMenu>
    );
  };

  render() {
    return (
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[menu.menus[0].key]}
      >
        {menu.menus.map((item: ISiderMenu, index: number) =>
          item.subs ? this.renderSubMenu(item) : this.renderMenuItem(item)
        )}
      </Menu>
    );
  }
}
