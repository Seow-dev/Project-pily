import React from "react";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalLoginContent,
  ModalCloseImg,
  BtnWrap,
  KakaoBtn,
  NaverBtn,
  GoogleBtn,
} from "./ModalStyles";
import closeIcon from "../../Common/close.png";
import { displayModalProps } from "../../Common/Interface";

function Login({ title, isOpen, onClose, toSignUp }: displayModalProps) {
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
        <ModalLoginContent>
          <BtnWrap>
            <KakaoBtn value="kakao" onClick={onClickHandler}>
              KAKAO LOGIN
            </KakaoBtn>
            <NaverBtn value="naver" onClick={onClickHandler}>
              NAVER LOGIN
            </NaverBtn>
            <GoogleBtn value="google" onClick={onClickHandler}>
              GOOGLE LOGIN
            </GoogleBtn>
          </BtnWrap>
        </ModalLoginContent>
        <div style={{ display: "none" }} id="hidden" onClick={toSignUp}>
          test
        </div>
      </ModalBox>
    </ModalPage>
  ) : null;
}

export default Login;
