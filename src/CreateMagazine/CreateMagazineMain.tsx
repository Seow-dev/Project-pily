import React, { useEffect, useLayoutEffect, useState } from "react";
import MagazineView from "./MagazineView";
import FeedView from "./FeedView";
import { feedResult } from "../Common/Dummy";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import Error from "../Modal/component/Error";


const CreateMagazineMain = () => {
  const { success } = useSelector((state: RootState) => state.authReducer);
  return (
    <>
      {success ? (
        <Wrapper>
          <Container>
            <MagazineView />
            <FeedView feedData={feedResult} />
          </Container>
        </Wrapper>
       ) : (
        <Error />
      )}
    </>
  );
};
export default withRouter(CreateMagazineMain);

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
