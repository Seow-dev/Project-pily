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
      {success ? (
      <>
        <Switch>
          <input type="checkbox" id="switch"/>
            <label htmlFor="switch">
              <Hamburger>
                <SpanWrapper>
                  <Span/><Span/><Span/>
                </SpanWrapper>
              </Hamburger>
            <Navigation id="mypage">
              <VscAccount onClick={redirectToMypage}/>
                <Paragraph>마이 페이지</Paragraph>
            </Navigation>
            <Navigation id="createMagazine">
              <VscBook onClick={redirectToCreateMagazine}/>
              <Paragraph>매거진 작성</Paragraph>
            </Navigation>
            <Navigation id="createFeed">
              <VscEdit onClick={redirectToCreateFeed}/>
              <Paragraph>피드 작성</Paragraph>
            </Navigation>
          </label>
        </Switch>
      </>
   ) : null }
  </div>
)}

export default withRouter(Action);