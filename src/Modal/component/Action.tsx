import React from "react";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalCloseImg,
  ModalOverlay,
} from "./ModalStyles";
import closeIcon from "../../Common/close.png";
import { displayModalProps } from "../../Common/Interface";
import { useSelector } from "react-redux";
import { RootState } from "../../Modules";

import './ActionStyle.css';
import { VscAdd, VscChromeClose,VscEdit,VscBook,VscAccount} from 'react-icons/vsc';

        
function Action() {
    
  const { success } = useSelector((state: RootState) => state.authReducer);
  return (
    <div>
      {success ? (
        <div>
        <input type="checkbox" id="switch"/>
        <label htmlFor="switch">
          <div id="spanWrapper">
            <span className="icon"></span>
            <span className="icon"></span>
            <span className="icon"></span>
          </div>
          <div className="nav" id="settings">
            <i className="material-icons">settings</i>
          </div>
          <div className="nav" id="thumb">
            <i className="material-icons">thumb_up</i>
          </div>
          <div className="nav" id="create">
            <i className="material-icons">create</i>
          </div>
          <div className="nav" id="share">
            <i className="material-icons">share</i>
          </div>
        </label>
      </div>
  ) : null}
  </div>
)}

export default Action;