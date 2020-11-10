import React from "react";
import {
  ModalPage,
  ModalLoginBox,
  ModalLoginContent,
  ModalCloseImg,
  BtnWrap,
  KakaoBtn,
  NaverBtn,
  GoogleBtn,
  LoginParagraph,
  LoginLogo,
  SearchB2,
} from "./ModalStyles";
import closeIcon from "../../Common/close.png";
import { displayModalProps } from "../../Common/Interface";
import { baseUrl } from "../../Common/base";

function Login({ onClose, toSignUp }: displayModalProps): JSX.Element {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    window.open(`${baseUrl}/signin/${value}`);
  };

  return (
    <ModalPage>
      <ModalLoginBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalLoginContent>
          <BtnWrap>
            <LoginLogo src="/image/logo.png" />
            <LoginParagraph>일상을 발행하다,<SearchB2>PILY</SearchB2></LoginParagraph>
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
      </ModalLoginBox>
    </ModalPage>
  );
}

export default Login;
