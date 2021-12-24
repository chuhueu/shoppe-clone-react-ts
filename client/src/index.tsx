import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Context from "./context";

ReactDOM.render(
  <Provider store={store}>
    <Context>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Context>
  </Provider>,
  document.getElementById("root")
);
