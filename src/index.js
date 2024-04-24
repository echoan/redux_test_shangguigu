/*
 * @Author: Chengya
 * @Description: Description
 * @Date: 2020-11-29 10:41:40
 * @LastEditors: Chengya
 * @LastEditTime: 2024-04-24 17:52:38
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  /* 此处需要用Provider包裹App，目的是让App所有的后代容器组件都能接收到store */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
