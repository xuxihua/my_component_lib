/*
 * @Descripttion: router
 * @Author: xxh
 * @Date: 2020-11-13 15:58:27
 * @LastEditors: xxh
 * @LastEditTime: 2020-11-18 15:47:57
 */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Detail from "../containers/pages/detail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/app" />
      </Route>
      <Route path="/app" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default BasicRoute;
