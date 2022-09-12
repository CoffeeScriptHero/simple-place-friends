import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import GlobalCSS from "./global.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
