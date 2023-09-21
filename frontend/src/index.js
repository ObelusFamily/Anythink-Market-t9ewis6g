import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
