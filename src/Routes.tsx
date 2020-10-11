import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MegazineGrid from "./Mainpage/component/MegazineGrid";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={MegazineGrid} />
      </Switch>
    </BrowserRouter>
  );
}
