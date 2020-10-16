import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFeed from "./CreateFeed/component/CreateFeed";
import MagazineGrid from "./Mainpage/component/MagazineGrid";
import MypageMain from "./Mypage/component/MypageMain";
import UserProfile from "./Mypage/component/UserProfile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={MagazineGrid} />
        <Route path="/mypage" component={MypageMain} />
        <Route path="/user/:username" component={UserProfile} />
        <Route path="/createfeed" component={CreateFeed} />
      </Switch>
    </BrowserRouter>
  );
}
