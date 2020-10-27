import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { MainWrapper } from "../../Mainpage/component/MainPage";
import MypageList from "./MypageList";
import * as S from "./CommonStyle";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { DataTypes, UserData } from "../../Common/Interface";
import { getProfileApi } from "../../Api/user";

interface matchprops {
  username: string;
}

const UserProfile = ({ match, history }: RouteComponentProps<matchprops>) => {
  const [curData, setCurData] = useState<DataTypes[]>([]);
  const [userData, setUserData] = useState<UserData>({
    profileImage: "",
    username: "",
  });

  const [isSub, setSub] = useState<boolean>(false);
  const confirm = window.confirm;
  const handleSub = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (isSub) {
        if (confirm(`정말 ${userData.username}님의 구독을 취소하시겠습니까?`)) {
          // 구독 취소 api
          setSub(false);
        }
      } else {
        // 구독하기 api
        setSub(true);
      }
    },
    [isSub],
  );

  const paramUsername: string = match.params.username;
  useEffect(() => {
    (async () => {
      const result = await getProfileApi(paramUsername);

      if (result.status === 200) {
        console.log(result.data);
        setUserData({
          username: result.data.username,
          profileImage: result.data.IMG
            ? result.data.IMG
            : "/image/default_user.png",
        });
        setSub(true); // 일단!
        setCurData(result.data.results);
      } else if (result.status === 404) {
        alert("유저 정보를 찾을 수 없습니다.");
        history.push("/");
      }
    })();
  }, []);

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
