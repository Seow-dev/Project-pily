import * as React from "react";
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
import { FeedContents, locationProps } from "../Common/Interface";
import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ModalCloseImg } from "../Modal/component/ModalStyles";
import closeIcon from "../Common/close.png";
import Error from "../Modal/component/Error";
import "quill/dist/quill.snow.css";
import { submitFeedApi } from "../Api/feed";

function CreateFeedMain({ history }: RouteComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const [location, setLocation] = useState<locationProps>({
    location_name: "",
    location_x: "",
    location_y: "",
  });

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
  };

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFeedContentsData({
      ...feedContentsData,
      [id]: value,
    });
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
      const title = feedContentsData.title;
      const content = feedContentsData.content;
      const subtitle = feedContentsData.subTitle;
      const starsRate = stars;
      const location = {};
      // submit Action
      // 기존 contents들과 stars, map location을 같이 보내달라
      // console.log("Data is ", feedContentsData);
      submitFeedApi(title, content, subtitle, starsRate, location);
      redirectToMain();
    } else {
      // rejected Action
      console.log("It is empty.");
    }
  };

  const { success } = useSelector((state: RootState) => state.authReducer);
  // let html = convertDeltaToHtml(feedContentsData.content);
  // console.log(html);

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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Labels>피드 위치 정보</Labels>
                    <input
                      placeholder="위치 이름을 기록하세요."
                      value={location.location_name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLocation({
                          ...location,
                          location_name: e.target.value,
                        })
                      }
                      style={{
                        fontSize: "1rem",
                        margin: "0 0 15px 20px",
                        border: "none",
                        borderBottom: "1px solid #343a40",
                        paddingBottom: "5px",
                        width: "fit-content",
                      }}
                    />
                  </div>
                  <Map setLocation={setLocation} />
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
          {/* <div>
            {ReactHtmlParser(feedContentsData.content)}
          </div> */}
          {/* <div className="ql-snow">
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: feedContentsData.content }}
            ></div>
          </div> */}
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
