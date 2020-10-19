import * as React from "react";
import { useState } from "react";
import { MainWrapper } from "../Mainpage/component/MagazineGrid";
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

export default function CreateFeedMain() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [stars, setStars] = useState<number>(0);
  const [inputs, setInputs] = useState({
    title: "",
    subTitle: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <MainWrapper>
      <FeedLabel>
        당신의 <span style={{ color: "#A3320B" }}>일상</span>을 기록하세요.
      </FeedLabel>
      <Head>
        <Title>
          <input
            name="title"
            value={inputs.title}
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
                  name="subTitle"
                  value={inputs.subTitle}
                  onChange={handleChange}
                  placeholder="소제목을 입력해주세요."
                />
              </div>
              <div>
                <Labels>피드에 별점 남기기</Labels>
                <StyledRate
                  onChange={value => {
                    setStars(value);
                    console.log(value);
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
        <EditorWrap>{/* 여기에 React-Quill을 입력해주세요 */}</EditorWrap>
        <SaveButton>피드 저장하기</SaveButton>
      </EditArea>
    </MainWrapper>
  );
}

// constant
const DESC = ["angry 😤", "not good 🙁", "soso 😀", "good 😁", "wonderful 😆"];
