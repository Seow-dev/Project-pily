import { MainWrapper } from "../../Mainpage/component/MagazineGrid";
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
import { results, result } from "../../Common/Dummy";
import { DataTypes, UserData } from "../../Common/Interface";

const UserProfile = ({ match }: RouteComponentProps) => {
  const [curData, setCurData] = useState<DataTypes[]>([]);

  const [userData, setUserData] = useState<UserData>({
    profileImage: "",
    username: "",
  });

  const paramUsername: any = match.params;
  useEffect(() => {
    const data = result.filter(el => el.username === paramUsername.username);
    setUserData(data[0]);
    setCurData(results.filter(el => Number(el.megazineId) % 2));
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
