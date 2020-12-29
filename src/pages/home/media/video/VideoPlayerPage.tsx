import React, { Component } from "react";
import MyCom from "../../../../components";
import { is, fromJS } from "immutable";

interface IProps {}
interface IState {
  videoSource: string,
  posterImg: string
}

export default class VideoPlayerPage extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      videoSource: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      posterImg: "https://video-react.js.org/assets/poster.png"
    }
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
    return <MyCom.VideoPlayer source={this.state.videoSource} posterImg={this.state.posterImg}></MyCom.VideoPlayer>;
  }
}
