import React from "react";
import Router from "./router";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default process.env.NODE_ENV === "development" ? hot(module)(App) : App;
