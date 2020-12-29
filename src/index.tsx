import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/style/global.less";
import "./assets/style/index.less";
import "./assets/style/antd/index.less";
import "./assets/style/pages/index.less";
import '../node_modules/video-react/dist/video-react.css';

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
document.title = "组件库";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
