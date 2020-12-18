/*
 * @Descripttion: 路由设置配置
 * @Author: xxh
 * @Date: 2020-11-17 19:02:29
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-18 09:59:57
 */
import React from "react";
import {
  UserOutlined,
  HomeOutlined,
  SkinOutlined,
  ApartmentOutlined,
  PropertySafetyOutlined,
} from "@ant-design/icons";
import Com from "../components";

export interface ISiderMenuBase {
  key: string;
  title: string;
  path: string;
  icon?: any;
  component?: any;
  route?: string;
}

export interface ISiderMenu extends ISiderMenuBase {
  subs?: ISiderMenuBase[];
}

export const menu: {
  menus: ISiderMenu[];
  others: ISiderMenu[] | [];
} = {
  // 菜单相关路由
  menus: [
    {
      key: "/app",
      path: "/app",
      title: "首页",
      icon: <HomeOutlined />,
      component: Com.HomeStatistics,
    },
    {
      key: "/app/user",
      path: "/app/user",
      title: "客户管理",
      icon: <UserOutlined />,
      subs: [
        {
          key: "/app/user/option1",
          path: "/app/user/option1",
          title: "客户列表",
          component: Com.HomeStatistics,
        },
      ],
    },
    {
      key: "/app/template",
      path: "/app/template",
      title: "模板管理",
      icon: <SkinOutlined />,
      subs: [
        {
          key: "/app/template/option1",
          path: "/app/template/option1",
          title: "模板设计",
          component: Com.HomeStatistics,
        },
        {
          key: "/app/template/option2",
          path: "/app/template/option2",
          title: "素材管理",
          component: Com.UserOption1,
        },
        {
          key: "/app/template/option3",
          path: "/app/template/option3",
          title: "模板列表",
          component: Com.UserOption1,
        },
      ],
    },
    {
      key: "/app/finance",
      path: "/app/finance",
      title: "财务管理",
      icon: <PropertySafetyOutlined />,
      subs: [
        {
          key: "/app/finance/option1",
          path: "/app/finance/option1",
          title: "打赏管理",
          component: Com.HomeStatistics,
        },
        {
          key: "/app/finance/option2",
          path: "/app/finance/option2",
          title: "账目明细",
          component: Com.UserOption1,
        },
        {
          key: "/app/finance/option3",
          path: "/app/finance/option3",
          title: "流水报表",
          component: Com.UserOption1,
        },
      ],
    },
    {
      key: "/app/jurisdiction",
      path: "/app/jurisdiction",
      title: "权限管理",
      icon: <ApartmentOutlined />,
      subs: [
        {
          key: "/app/jurisdiction/option1",
          path: "/app/jurisdiction/option1",
          title: "账号管理",
          component: Com.HomeStatistics,
        },
        {
          key: "/app/jurisdiction/option2",
          path: "/app/jurisdiction/option2",
          title: "角色管理",
          component: Com.UserOption1,
        },
      ],
    },
  ],
  // 非菜单相关路由
  others: [],
};
