import React, { Component } from "react";
import { is, fromJS } from "immutable";
import API from "../api/api";
import { Menu } from "antd";
import { ISiderMenu, menu } from "../router/config";
import { Link } from "react-router-dom";
import { MenuStoreState } from "../interfaces/store/homeStoreState.interface";
import { RouteComponentProps } from "react-router-dom";

const { SubMenu } = Menu;

interface IProps {
  menuData: MenuStoreState;
  saveMenuKey: (value: object) => void;
}
interface IState {
  collapsed: boolean;
  openKeys: string[];
  selectedKeys: string[];
}

export default class SideMenu extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      collapsed: false,
      selectedKeys: [],
      openKeys: [],
    };
  }

  // ========生命周期=========
  componentWillMount() {
    let pathname = window.location.pathname;
    //获取当前所在的目录层级
    const rank = pathname.split("/");
    rank.shift();
    console.log(rank);
    console.log(rank.length);
    switch (rank.length) {
      case 1: //一级目录，要展开一个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: ["/" + rank],
        });
        break;
      case 2: //一级目录，要展开一个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: ["/" + rank.slice(0).join("/")],
        });
        break;
      case 3: //二级目录，要展开两个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: [
            "/" + rank.slice(0, -1).join("/"),
            "/" + rank.slice(0).join("/"),
          ],
        });
        break;
      case 4: //三级目录，要展开三个subMenu
        this.setState({
          selectedKeys: [pathname],
          openKeys: [
            "/" + rank.slice(0, -2).join("/"),
            "/" + rank.slice(0, -1).join("/"),
            "/" + rank.slice(0).join("/"),
          ],
        });
        break;
    }
  }
  componentDidMount() {
    console.log(this.state.openKeys);
  }
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

  handleClick = (title: string, key: string) => {
    console.log(key);
    console.log(this.props.menuData.menuKey);
    document.title = "app-" + title;
    let data = {
      menuKey: key,
    };
    this.props.saveMenuKey(data);
    console.log(this.props.menuData.menuKey);
  };

  renderMenuItem = (item: ISiderMenu) => {
    return (
      <Menu.Item key={item.key} icon={item.icon}>
        <Link
          to={item.path}
          onClick={this.handleClick.bind(this, item.title, item.key)}
        >
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
        defaultOpenKeys={this.state.openKeys}
        defaultSelectedKeys={this.state.selectedKeys}
      >
        {menu.menus.map((item: ISiderMenu, index: number) =>
          item.subs ? this.renderSubMenu(item) : this.renderMenuItem(item)
        )}
      </Menu>
    );
  }
}
