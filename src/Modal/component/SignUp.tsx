import React, { useEffect, useState } from "react";
import {
  ModalCloseImg,
  ModalPage,
  SignUpBox,
  SignUpBtn,
  SignUpBtnWrapper,
  SignUpCancel,
  SignUpCancelBtn,
  SignUpCheck,
  SignUpInput,
  SignUpWrapper,
} from "./ModalStyles";
import { displayModalProps } from "../../Common/Interface";
import { signUpApi, vaildateUsernameApi } from "../../Api/auth";
import closeIcon from "../../Common/close.png";

export default function SignUp({ onClose }: displayModalProps): JSX.Element {
  const [nick, setNick] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const [valid, setValid] = useState(false);
  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // 서버에 회원가입 관련 닉네임 데이터를 날립니다.
    e.preventDefault();
    if (valid) {
      const result = await signUpApi(nick); // 비동기 로직 여기에
      if (result.status === 200) {
        setNick("");
        onClose();
        window.location.reload();
      } else {
        alert("닉네임을 다시 정해주세요.");
        setNick("");
      }
    }
  };

  useEffect(() => {
    (async () => {
      const result = await vaildateUsernameApi(nick);
      if(result.status === 404){
        setValid(false);
      }else if(result.status === 200){
        setValid(result.data.isValidate);
      }
    })();
  }, [nick]);

  return (
    <ModalPage>
      <SignUpBox>
      <ModalCloseImg src={closeIcon} onClick={onClose} />
        <SignUpWrapper>
          { valid ? (
            <SignUpCheck />
          ) : (
            <SignUpCancel /> 
          )}
            <SignUpInput
              value={nick}
              onChange={handleChange}
              placeholder="닉네임을 입력해주세요."
              valid={valid}
            />
            <SignUpBtnWrapper>
              <SignUpBtn onClick={handleSignUp} disabled={!valid}> 
                회원가입
              </SignUpBtn>
              <SignUpCancelBtn onClick={onClose}>
                취소
              </SignUpCancelBtn>
            </SignUpBtnWrapper>
          </SignUpWrapper>
      </SignUpBox>
    </ModalPage>
  );
}
