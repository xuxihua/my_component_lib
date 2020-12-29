/*
 * @Descripttion: 路由设置配置
 * @Author: xxh
 * @Date: 2020-11-17 19:02:29
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-29 14:29:30
 */
import React from "react";
import {
  UserOutlined,
  HomeOutlined,
  SkinOutlined,
  ApartmentOutlined,
  PropertySafetyOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import MyCom from "../components";
import MyPage from "../pages";

export interface ISiderMenuBase {
  key: string;
  title: string;
  path: string;
  icon?: any;
  component?: any;
  route?: string;
  subs?: any;
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
      component: MyCom.HomeStatistics,
    },
    {
      key: "/app/echarts",
      path: "/app/echarts",
      title: "图表管理",
      icon: <UserOutlined />,
      subs: [
        {
          key: "/app/echarts/bar",
          path: "/app/echarts/bar",
          title: "柱状图",
          subs: [
            {
              key: "/app/echarts/bar/3Dbar",
              path: "/app/echarts/bar/3Dbar",
              title: "3D柱状图",
              component: MyPage.Bar3DPage,
            },
          ]
        },
      ],
    },
    {
      key: "/app/component",
      path: "/app/component",
      title: "组件管理",
      icon: <SkinOutlined />,
      subs: [
        {
          key: "/app/component/showData",
          path: "/app/component/showData",
          title: "数据展示",
          subs: [
            {
              key: "/app/component/showData/carousel",
              path: "/app/component/showData/carousel",
              title: "走马灯",
              component: MyCom.CarouselWithTab,
            },
            {
              key: "/app/component/showData/tabs",
              path: "/app/component/showData/tabs",
              title: "标签页",
              component: MyPage.TabsPage,
            },
          ]
        },
        // {
        //   key: "/app/component/option2",
        //   path: "/app/component/option2",
        //   title: "素材管理",
        //   component: MyCom.UserOption1,
        // },
        // {
        //   key: "/app/component/option3",
        //   path: "/app/component/option3",
        //   title: "模板列表",
        //   component: MyCom.UserOption1,
        // },
      ],
    },
    {
      key: "/app/media",
      path: "/app/media",
      title: "媒体管理",
      icon: <VideoCameraOutlined />,
      subs: [
        {
          key: "/app/media/video",
          path: "/app/media/video",
          title: "视频播放",
          component: MyPage.VideoPlayerPage,
        },
      ],
    },
    // {
    //   key: "/app/finance",
    //   path: "/app/finance",
    //   title: "财务管理",
    //   icon: <PropertySafetyOutlined />,
    //   subs: [
    //     {
    //       key: "/app/finance/option1",
    //       path: "/app/finance/option1",
    //       title: "打赏管理",
    //       component: MyCom.HomeStatistics,
    //     },
    //     {
    //       key: "/app/finance/option2",
    //       path: "/app/finance/option2",
    //       title: "账目明细",
    //       component: MyCom.UserOption1,
    //     },
    //     {
    //       key: "/app/finance/option3",
    //       path: "/app/finance/option3",
    //       title: "流水报表",
    //       component: MyCom.UserOption1,
    //     },
    //   ],
    // },
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
          component: MyCom.HomeStatistics,
        },
        {
          key: "/app/jurisdiction/option2",
          path: "/app/jurisdiction/option2",
          title: "角色管理",
          component: MyCom.UserOption1,
        },
      ],
    },
  ],
  // 非菜单相关路由
  others: [],
};
