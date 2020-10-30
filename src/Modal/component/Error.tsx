import styled from "styled-components";
// import { MainWrapper } from "../../Mainpage/component/MagazineGrid";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { media } from "../../Common/DeviceSize";

function Error({ history }: RouteComponentProps) {
  return (
    <ErrorDiv>
      <ErrorMessage>로그인이 필요한 페이지입니다.</ErrorMessage>
      <GobackButton onClick={() => history.push("/")}>되돌아가기</GobackButton>
    </ErrorDiv>
  );
}
export default withRouter(Error);

// style
const ErrorDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ErrorMessage = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;

  ${media.tablet} {
    font-size: 2rem;
    font-weight: 600;
  }
`;
const GobackButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #adb5bd;
  width: fit-content;
  cursor: pointer;

  ${media.tablet} {
    padding: 0.8rem;
    font-size: 1rem;
  }
`;
