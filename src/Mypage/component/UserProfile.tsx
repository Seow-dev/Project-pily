import { MainWrapper } from "../../Mainpage/component/MainPage";
import {
  UserInfo,
  UserImg,
  UserName,
  TabMenu,
  MagazineListContainer,
  MagazineListWrap,
  SideTabMenu,
  UserDetail,
} from "./CommonStyle";
import MypageList from "./MypageList";
import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { DataTypes, UserData } from "../../Common/Interface";
import { getProfileApi } from "../../Api/user";
import { AxiosResponse } from "axios";

interface matchprops {
  username: string;
}

const UserProfile = ({ match }: RouteComponentProps<matchprops>) => {
  const [curData, setCurData] = useState<DataTypes[]>([]);

  const [userData, setUserData] = useState<UserData>({
    profileImage: "",
    username: "",
  });

  const paramUsername: string = match.params.username;
  useEffect(() => {
    console.log(paramUsername);
    (async () => {
      const data = await getProfileApi(paramUsername).then(
        (res: AxiosResponse) => res.data,
      );

      if (data) {
        console.log(data);
        setUserData({
          username: data.username,
          profileImage: data.IMG ? data.IMG : "/image/default_user.png",
        });
        setCurData(data.results);
      }
    })();
  }, []);

  return (
    <MainWrapper>
      <UserInfo>
        <UserImg
          src={
            userData.profileImage
              ? userData.profileImage
              : "/image/default_user.png"
          }
        />
        <UserDetail>
          <UserName>{userData.username}</UserName>
        </UserDetail>
      </UserInfo>
      <MagazineListWrap>
        <MagazineListContainer>
          <MypageList listData={curData} own={true} />
        </MagazineListContainer>
        <SideTabMenu>
          <TabMenu cur>발행한 매거진</TabMenu>
        </SideTabMenu>
      </MagazineListWrap>
    </MainWrapper>
  );
};

export default withRouter(UserProfile);
