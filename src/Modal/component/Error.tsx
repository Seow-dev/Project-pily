import styled from "styled-components";
// import { MainWrapper } from "../../Mainpage/component/MagazineGrid";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

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
`;
const GobackButton = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: #adb5bd;
  width: fit-content;
  cursor: pointer;
`;
