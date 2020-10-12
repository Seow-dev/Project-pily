import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainContainer from "./Mainpage/container/MainContainer";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
}
