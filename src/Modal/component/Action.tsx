import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Modules";
import { VscEdit, VscBook, VscAccount } from 'react-icons/vsc';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Switch, Hamburger, Navigation, Span, SpanWrapper, Paragraph } from './ModalStyles';


function Action({ history }: RouteComponentProps) {
    
  const { success } = useSelector((state: RootState) => state.authReducer);
  const redirectToMypage = () =>{
    history.push("/mypage")
  }
  const redirectToCreateFeed = () =>{
    history.push("/create/feed")
  }
    const redirectToCreateMagazine = () =>{
    history.push("/create/magazine")
  }

  return (
    <div>
      {/* {success ? ( */}
      <>
        <Switch>
          <input type="checkbox" id="switch"/>
            <label htmlFor="switch">
              <Hamburger>
                <SpanWrapper>
                  <Span/><Span/><Span/>
                </SpanWrapper>
              </Hamburger>
            <Navigation id="mypage" onClick={redirectToMypage}>
              <VscAccount />
                <Paragraph>마이 페이지</Paragraph>
            </Navigation>
            <Navigation id="createMagazine" onClick={redirectToCreateMagazine}>
              <VscBook />
              <Paragraph>매거진 작성</Paragraph>
            </Navigation>
            <Navigation id="createFeed" onClick={redirectToCreateFeed}>
              <VscEdit />
              <Paragraph>피드 작성</Paragraph>
            </Navigation>
          </label>
        </Switch>
      </>
   {/* ) : null } */}
  </div>
)}

export default withRouter(Action);