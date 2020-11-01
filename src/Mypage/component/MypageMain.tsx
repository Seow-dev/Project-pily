import {
  UserInfo,
  UserImg,
  UserName,
  TabMenu,
  MagazineListContainer,
  MagazineListWrap,
  SideTabMenu,
  UserNameInput,
  ChangeButton,
  UserDetail,
  ButtonWrap,
  ValidBox,
} from "./CommonStyle";
import { MainWrapper } from "../../Mainpage/component/MainPage";
import React, { useEffect, useRef, useState } from "react";
import MypageList from "./MypageList";
import { Modalpage } from "../../Modal/container";
import { results, result } from "../../Common/Dummy";
import { DataTypes, UserData } from "../../Common/Interface";
import SubscribeList from "./SubscribeList";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Modules";
import Error from "../../Modal/component/Error";
import * as userApi from "../../Api/user";
import { AxiosResponse } from "axios";
import { getMyFeedApi } from "../../Api/feed";
import { vaildateUsernameApi } from "../../Api/auth";
import { PreviewModal } from "../../Modal/component/Preview";

const MypageMain: React.FC<RouteComponentProps> = ({ history }) => {
  const [userData, setUserData] = useState<UserData>({
    username: "",
    profileImage: "",
  });
  const { success } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    (async () => {
      const data = await userApi
        .getUserDataApi()
        .then((res: AxiosResponse) => res.data);

      if (data) {
        setUserData({
          username: data.username,
          profileImage: data.IMG ? data.IMG : "/image/default_user.png",
        });
      }
    })();
  }, [userData.profileImage]);

  const [curMenu, setCurMenu] = useState<string>("like");
  const [curData, setCurData] = useState<DataTypes[]>([]);
  const [subData, setSubData] = useState<UserData[]>([]);
  useEffect(() => {
    // 메뉴에 따른 데이터 목록 가지고 오는 훅
    (async () => {
      if (curMenu === "like") {
        // const data = await userApi.getLikeMagazine().then((res: AxiosResponse) => res.data)
        setCurData(results);
      } else if (curMenu === "subscribe") {
        // const data = await userApi.getSubscribeApi().then((res: AxiosResponse) => res.data)
        setSubData(result);
      } else if (curMenu === "myFeed") {
        // const data = await getMyFeedApi().then((res: AxiosResponse) => res.data)
        setCurData(results);
      } else if (curMenu === "myMagazine") {
        // 내가 작성한 매거진 목록 조회 api 출동
        // const data = await userApi.getMyMagazine().then((res: AxiosResponse) => res.data)
        setCurData(results);
      }
    })();
  }, [curMenu]);

  const [change, setChange] = useState<boolean>(false);
  const [valid, setValid] = useState(true);
  const changeUsername = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value.length === 0) {
      setValid(false);
    }
    setUserData({
      ...userData,
      [name]: value,
    });

    const result = await vaildateUsernameApi(value);
    if (result.status === 200) {
      if (!result.data.isValidate) {
        setValid(false);
      } else {
        setValid(true);
      }
    }
  };
  const updateUsername = async () => {
    await userApi.updateUserNameApi(userData.username);
    setChange(false);
  };

  const uploadedImage = useRef<HTMLImageElement>(null);
  const imageUploader = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const formData = new FormData();
      formData.append("img", e.currentTarget.files[0]);
      const result = await userApi.updateImgApi(formData);

      if (result.status === 200) {
        window.location.reload();
      }
    }
  };
  
  const [isPreviewModalOpen, setPreviewModalState] = useState(false);
  const previewToggleModal = () => setPreviewModalState(!isPreviewModalOpen);
  const [feedData, setFeedData] = useState({
    title: "",
    feedBody: "",
  });
  const getFeedData = (data: DataTypes) => {
    const feedTitle = data.title;
    const feedContent = data.content;
    setFeedData({
      title: feedTitle,
      feedBody: feedContent,
    });
  };


  return (
    <>
      {success ? (
        <MainWrapper>
          {isPreviewModalOpen ? (
            <PreviewModal
            title={feedData.title}
            content={feedData.feedBody}
            onClose={previewToggleModal} />
          ) : null
        }
          <Modalpage getSearchData={()=>{}}/>
          <UserInfo>
            <input
              ref={imageUploader}
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
            <UserImg
              ref={uploadedImage}
              src={userData.profileImage}
              alt="유저 이미지"
            />
            <UserDetail>
              {change ? (
                <>
                  <ValidBox>
                    <UserNameInput
                      name="username"
                      value={userData.username}
                      onChange={changeUsername}
                    />
                    <span style={valid ? { color: "green" } : { color: "red" }}>
                      {valid
                        ? "사용 가능한 닉네임 입니다."
                        : "사용 불가능한 닉네임 입니다."}
                    </span>
                  </ValidBox>
                  <ButtonWrap>
                    <ChangeButton
                      save
                      onClick={() => {
                        if (imageUploader.current) {
                          imageUploader.current.click();
                        }
                      }}
                    >
                      이미지 변경
                    </ChangeButton>
                    <ChangeButton save onClick={updateUsername}>
                      닉네임 저장
                    </ChangeButton>
                  </ButtonWrap>
                </>
              ) : (
                <>
                  <UserName>{userData.username}</UserName>
                  <ButtonWrap>
                    <ChangeButton
                      save
                      onClick={() => {
                        if (imageUploader.current) {
                          imageUploader.current.click();
                        }
                      }}
                    >
                      이미지 변경
                    </ChangeButton>
                    <ChangeButton
                      onClick={() => {
                        setChange(true);
                      }}
                    >
                      닉네임 수정
                    </ChangeButton>
                  </ButtonWrap>
                </>
              )}
            </UserDetail>
          </UserInfo>
          <MagazineListWrap>
            <MagazineListContainer>
              {curMenu === "like" && (
                <MypageList 
                listData={curData} 
                own={false} 
                getFeedData={getFeedData}
                onActivePreview={previewToggleModal}
                />
              )}
              {curMenu === "subscribe" && <SubscribeList listData={subData} />}
              {curMenu === "myFeed" && (
                <MypageList 
                listData={curData} 
                own={true} 
                getFeedData={getFeedData}
                onActivePreview={previewToggleModal}
                />
              )}
              {curMenu === "myMagazine" && (
                <MypageList 
                listData={curData} 
                own={true} 
                getFeedData={getFeedData}
                onActivePreview={previewToggleModal}
                />
              )}
            </MagazineListContainer>
            <SideTabMenu >
              {curMenu === "like" ? (
                <TabMenu cur>좋아요 매거진 </TabMenu>
              ) : (
                <TabMenu onClick={() => setCurMenu("like")}>
                  좋아요 매거진
                </TabMenu>
              )}
              {curMenu === "subscribe" ? (
                <TabMenu cur>구독한 유저</TabMenu>
              ) : (
                <TabMenu onClick={() => setCurMenu("subscribe")}>
                  구독한 유저
                </TabMenu>
              )}
              {curMenu === "myFeed" ? (
                <TabMenu cur>나의 피드</TabMenu>
              ) : (
                <TabMenu onClick={() => setCurMenu("myFeed")}>
                  나의 피드
                </TabMenu>
              )}
              {curMenu === "myMagazine" ? (
                <TabMenu cur>나의 매거진</TabMenu>
              ) : (
                <TabMenu onClick={() => setCurMenu("myMagazine")}>
                  나의 매거진
                </TabMenu>
              )}
            </SideTabMenu>
          </MagazineListWrap>
        </MainWrapper>
      ) : (
        <Error />
      )}
    </>
  );
};

export default withRouter(MypageMain);
