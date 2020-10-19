import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFeedMain from "./CreateFeed/CreateFeedMain";
import CreateFeed from "./CreateFeed/component/CreateFeed";
import MagazineGrid from "./Mainpage/component/MagazineGrid";
import MypageMain from "./Mypage/component/MypageMain";
import UserProfile from "./Mypage/component/UserProfile";
import CreateMagazineMain from "./CreateMagazine/CreateMagazineMain";
import AuthCheck from "./Modal/component/AuthCheck";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={MagazineGrid} />
        <Route path="/mypage" component={MypageMain} />
        <Route path="/user/:username" component={UserProfile} />
        <Route path="/create/feed" component={CreateFeedMain} />
        <Route path="/createfeed" component={CreateFeed} />

        <Route path="/test" component={CreateMagazineMain} />
        <Route path="/sign/:exist" component={AuthCheck} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}
