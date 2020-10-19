import * as React from "react";
import MagazineView from "./MagazineView";
import FeedView from "./FeedView";
import { feedResult } from "../Common/Dummy";
import styled from "styled-components";

export default function CreateMagazineMain() {
  return (
    <Wrapper>
      <Container>
        <MagazineView />
        <FeedView feedData={feedResult} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 95%;
  height: 1000px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 60px 1fr;
  column-gap: 2rem;
`;
