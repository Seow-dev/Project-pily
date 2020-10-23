import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFeedMain from "./CreateFeed/CreateFeedMain";
import MagazineGrid from "./Mainpage/component/MagazineGrid";
import MypageMain from "./Mypage/component/MypageMain";
import UserProfile from "./Mypage/component/UserProfile";
import CreateMagazineMain from "./CreateMagazine/CreateMagazineMain";
import AuthCheck, { SignoutCheck } from "./Modal/component/AuthCheck";
import { Logo } from './Common/Logo'

export default function Routes() {
  return (
    <BrowserRouter>
      <Logo />
      <Switch>
        <Route exact={true} path="/" component={MagazineGrid} />
        <Route path="/mypage" component={MypageMain} />
        <Route path="/user/:username" component={UserProfile} />
        <Route path="/create/feed" component={CreateFeedMain} />
        <Route path="/create/magazine" component={CreateMagazineMain} />
        <Route path="/sign/:exist" component={AuthCheck} exact={true} />
        <Route path="/sign" exact={true} component={SignoutCheck} />
        <Route path="/test" exact={true} />
      </Switch>
    </BrowserRouter>
  );
}
