import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { MainWrapper } from "../../Mainpage/component/MainPage";
import MypageList from "./MypageList";
import * as S from "./CommonStyle";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { DataTypes, UserData } from "../../Common/Interface";
import { getProfileApi, subscribeApi, unSubscribeApi } from "../../Api/user";

interface matchprops {
  username: string;
}

const UserProfile = ({ match, history }: RouteComponentProps<matchprops>) => {
  const [curData, setCurData] = useState<DataTypes[]>([]);
  const [userData, setUserData] = useState<UserData>({
    profileImage: "",
    username: "",
  });

  const paramUsername: string = match.params.username;
  const [isSub, setSub] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await getProfileApi(paramUsername);
        if (result.status === 200) {
          setUserData({
            username: result.data.username,
            profileImage: result.data.IMG
              ? result.data.IMG
              : "/image/default_user.png",
          });

          if (result.data.isSubscribed) {
            setSub(true); // 일단!
          } else {
            setSub(false);
          }
          setCurData(result.data.results);
        }
      } catch (err) {
        alert("유저 정보를 찾을 수 없습니다.");
        history.push("/");
      }
    })();
  }, []);

  const confirm = window.confirm;
  const handleSub = useCallback(async () => {
    if (isSub) {
      if (confirm(`정말 ${userData.username}님의 구독을 취소하시겠습니까?`)) {
        // 구독 취소 api
        setSub(false);
        await unSubscribeApi(paramUsername);
      }
    } else {
      // 구독하기 api
      setSub(true);
      await subscribeApi(paramUsername);
    }
  }, [isSub]);

  return (
    <MainWrapper>
      <S.UserInfo>
        <S.UserImg
          src={
            userData.profileImage
              ? userData.profileImage
              : "/image/default_user.png"
          }
        />
        <S.UserDetail>
          <S.UserName>{userData.username}</S.UserName>
          <S.ButtonWrap>
            {isSub ? (
              <S.ChangeButton
                onClick={handleSub}
                style={{ backgroundColor: "#fa5252" }}
              >
                구독 취소하기
              </S.ChangeButton>
            ) : (
              <S.ChangeButton onClick={handleSub} save>
                구독하기
              </S.ChangeButton>
            )}
          </S.ButtonWrap>
        </S.UserDetail>
      </S.UserInfo>
      <S.MagazineListWrap>
        <S.MagazineListContainer>
          <MypageList listData={curData} own={true} />
        </S.MagazineListContainer>
        <S.SideTabMenu>
          <S.TabMenu cur>발행한 매거진</S.TabMenu>
        </S.SideTabMenu>
      </S.MagazineListWrap>
    </MainWrapper>
  );
};

export default withRouter(UserProfile);
