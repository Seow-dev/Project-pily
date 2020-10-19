import React, { useState } from "react";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalCloseImg,
} from "./ModalStyles";
import closeIcon from "../../Common/close.png";
import { displayModalProps } from "../../Common/Interface";

function Login({ title, isOpen, onClose, toSignUp }: displayModalProps) {
  // 소셜로그인에 따라 로그인시킨 뒤 닉네임 변경으로 저장

  const [Data, setData] = useState("");

  const baseurl = "http://localhost:4000/signin";
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    window.open(`${baseurl}/${value}`);
  };

  return isOpen ? (
    <ModalPage>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          <button value="kakao" onClick={onClickHandler}>
            Login with Kakao
          </button>
          <button value="naver" onClick={onClickHandler}>
            Login with Naver
          </button>
          <button value="google" onClick={onClickHandler}>
            Login with Google
          </button>
        </ModalContent>
        <div style={{ display: "none" }} id="hidden" onClick={toSignUp}>
          test
        </div>
      </ModalBox>
    </ModalPage>
  ) : null;
}

export default Login;
