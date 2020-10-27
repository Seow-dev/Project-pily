import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import GlobalStyle from "./Common/GlobalStyles";
import rootReducer from "./Modules";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById("root"),
);
