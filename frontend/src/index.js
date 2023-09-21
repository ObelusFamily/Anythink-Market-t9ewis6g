import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Banner from "./components/Home/Banner";


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Banner>
        <GlobalStyle />
      </Banner>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
