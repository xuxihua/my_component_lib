/*
 * @Descripttion: containers目录用来存放需要与数据交互的组件
 * @Author: xxh
 * @Date: 2020-11-16 10:50:11
 * @LastEditors: xxh
 * @LastEditTime: 2020-12-21 15:18:45
 */
import SiderMenu from "../../components/SiderMenu";
import * as actions from "../../store/home/action";
import { MenuStoreState } from "../../interfaces/store/homeStoreState.interface";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapStateToProps = (state: MenuStoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.modifyActionType>) => ({
  saveMenuKey: (value: object) => dispatch(actions.saveMenuKey(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiderMenu);