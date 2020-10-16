import * as React from "react";
import { useState } from "react";
import { MainWrapper } from "../Mainpage/component/MagazineGrid";
import {
  Head,
  Title,
  Option,
  Subtitle,
  Map,
  EditArea,
  EditorWrap,
  SaveButton,
  FeedLabel,
  OptionSlide,
} from "./CommonStyles";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function CreateFeedMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainWrapper>
      <FeedLabel>
        당신의 <span style={{ color: "#A3320B" }}>일상</span>을 기록하세요.
      </FeedLabel>
      <Head>
        <Title>
          <input placeholder="피드 제목을 입력해주세요." />
          <div />
        </Title>
        <OptionSlide>
          <p>소제목과 위치 정보를 반영해보세요</p>
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
            <Subtitle placeholder="소제목을 입력해주세요." />
            <Map />
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
