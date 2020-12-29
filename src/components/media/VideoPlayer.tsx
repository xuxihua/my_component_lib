import React, { Component } from "react";
import { is, fromJS } from "immutable";
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl, // 前进按钮
  BigPlayButton,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton, // 倍速播放选项
  VolumeMenuButton,
} from "video-react";

interface IProps {
  source: string;
  posterImg: string;
}
interface IState {}

export default class VideoPlayer extends Component<IProps, IState> {
  private player: React.RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.player = React.createRef();
  }

  // ===========生命周期==========
  componentDidMount() {
    console.log(this.player);
  }

  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    // 性能优化：比较新旧props或state确定是否需要更新，减少重渲染
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    );
  }

  // ==========自定义行为==========
  handleStateChange(state: IState, prevState: IState) {
    console.log(state);
  }

  render() {
    return (
      <div style={{ width: 500, height: 300, margin: 50 }}>
        <Player
          playsInline
          ref={this.player}
          poster={this.props.posterImg}
        >
          <BigPlayButton position="center" />
          <source src={this.props.source} />
          <ControlBar autoHide={false} disableDefaultControls={false}>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <PlayToggle />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </div>
    );
  }
}
