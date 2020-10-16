import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import GlobalStyle from "./Common/GlobalStyles";
import rootReducer from "./Modules";
import Thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </>,
  document.getElementById("root"),
);
