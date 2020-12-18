/*
 * @Descripttion: containers目录用来存放需要与数据交互的组件
 * @Author: xxh
 * @Date: 2020-11-16 10:50:11
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-18 15:52:00
 */
import Detail from "../../pages/Detail";
import * as actions from "../../store/home/action";
import { HomeStoreState } from "../../interfaces/store/homeStoreState.interface";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapStateToProps = (state: HomeStoreState) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.modifyActionType>) => ({
  saveFormData: (value: object) => dispatch(actions.saveFormData(value)),
  clearForm: () => dispatch(actions.clearForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
