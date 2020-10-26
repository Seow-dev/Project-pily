import React from "react";
import { useState } from "react";
import { MainWrapper } from "../Mainpage/component/MainPage";
import {
  Head,
  Title,
  Option,
  Subtitle,
  EditArea,
  EditorWrap,
  SaveButton,
  FeedLabel,
  OptionSlide,
  OptionWrap,
  Labels,
  StyledRate,
  MapArea,
} from "./CommonStyles";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import Map from "./Map";
import Editor from "./Editor";
import { FeedContents } from "../Common/Interface";

import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ModalCloseImg } from "../Modal/component/ModalStyles";
import closeIcon from "../Common/close.png";
import Error from "../Modal/component/Error";
import "quill/dist/quill.snow.css";

function CreateFeedMain({ history }: RouteComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState<number>(0);

  const [feedContentsData, setFeedContentsData] = useState<FeedContents>({
    title: "",
    subTitle: "",
    content: "",
  });

  const contentHandleChange = (e: string) => {
    setFeedContentsData({
      ...feedContentsData,
      content: e,
    });
    // console.log(feedContentsData);
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFeedContentsData({
      ...feedContentsData,
      [id]: value,
    });
    // console.log(feedContentsData);
  };
  const redirectToMain = () => {
    history.push("/");
  };

  const submitHandler = () => {
    if (
      !(
        feedContentsData.content === "" ||
        feedContentsData.content === null ||
        feedContentsData.content === undefined
      )
    ) {
      const data = { feedContentsData };

      // submit Action
      // console.log("Data is ", data);
      redirectToMain();
    } else {
      // rejected Action
      // console.log("It is empty.");
    }
  };

  const { success } = useSelector((state: RootState) => state.authReducer);

  return (
    <>
      {success ? (
        <MainWrapper>
          <ModalCloseImg src={closeIcon} onClick={redirectToMain} />
          <FeedLabel>
            당신의 <span style={{ color: "#A3320B" }}>일상</span>을 기록하세요.
          </FeedLabel>
          <Head>
            <Title>
              <input
                id="title"
                value={feedContentsData.title}
                placeholder="피드 제목을 입력해주세요."
                onChange={handleChange}
              />
              <div />
            </Title>
            <OptionSlide>
              <p>소제목과 위치 정보를 기록하세요</p>
              {isOpen ? (
                <button onClick={() => setIsOpen(false)}>
                  <MdKeyboardArrowUp />
                </button>
              ) : (
                <button onClick={() => setIsOpen(true)}>
                  <MdKeyboardArrowDown />
                </button>
              )}
            </OptionSlide>
            {isOpen ? (
              <Option>
                <OptionWrap>
                  <div>
                    <Labels>피드 소제목</Labels>
                    <Subtitle
                      id="subTitle"
                      value={feedContentsData.subTitle}
                      placeholder="소제목을 입력해주세요."
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Labels>피드에 별점 남기기</Labels>
                    <StyledRate
                      onChange={value => {
                        setStars(value);
                      }}
                      tooltips={DESC}
                      value={stars}
                      defaultValue={0}
                    />
                  </div>
                </OptionWrap>
                <MapArea>
                  <Labels>위치 정보 기록</Labels>
                  <Map />
                </MapArea>
              </Option>
            ) : null}
          </Head>
          <EditArea>
            <EditorWrap>
              <Editor changeFeedContent={contentHandleChange} />
            </EditorWrap>
            <SaveButton onClick={submitHandler}>피드 저장하기</SaveButton>
          </EditArea>
          <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: feedContentsData.content }}
            ></div>
          </div>
        </MainWrapper>
      ) : (
        <Error />
      )}
    </>
  );
}

export default withRouter(CreateFeedMain);

// constant
const DESC = ["angry 😤", "not good 🙁", "soso 😀", "good 😁", "wonderful 😆"];
