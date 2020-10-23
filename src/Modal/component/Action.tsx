import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Modules";
import { VscEdit, VscBook, VscAccount } from 'react-icons/vsc';
import './ActionStyle.css';
import { RouteComponentProps, withRouter } from "react-router-dom";
        
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
      <div>
        <input type="checkbox" id="switch"/>
          <label htmlFor="switch">
            <div id="hamburger">
              <div id="spanWrapper">
                <span className="icon"></span>
                <span className="icon"></span>
                <span className="icon"></span>
              </div>
            </div>
          <div className="nav" id="mypage">
            <VscAccount onClick={redirectToMypage}/>
              <p>마이 페이지</p>
          </div>
          <div className="nav" id="createMagazine">
            <VscBook onClick={redirectToCreateMagazine}/>
            <p>매거진 작성</p>
          </div>
          <div className="nav" id="createFeed">
            <VscEdit onClick={redirectToCreateFeed}/>
            <p>피드 작성</p>
          </div>
        </label>
      </div>
   ) : null}
  </div>
)}

export default withRouter(Action);