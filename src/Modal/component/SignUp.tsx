import React, { useEffect, useState } from "react";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalSearchContent,
  ModalLoginBox,
} from "./ModalStyles";
import { displayModalProps } from "../../Common/Interface";
import { signUpApi, vaildateUsernameApi } from "../../Api/auth";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { AxiosResponse } from "axios";

export default function SignUp({
  title,
  onClose,
}: displayModalProps): JSX.Element {
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
      <ModalLoginBox>
        <ModalTitle>{title}</ModalTitle>
        <ModalSearchContent>
          { valid ? (
            <FcCheckmark style={{ fontSize: "20px", marginRight: "5px" }} />
          ) : (
            <FcCancel style={{ fontSize: "20px", marginRight: "5px" }} /> 
          )}
            <input
              value={nick}
              onChange={handleChange}
              placeholder="닉네임을 입력해주세요."
              style={valid ? {color: "black"} : {color: "red" }}
            />
            <button onClick={handleSignUp} disabled={!valid}>회원가입</button>
          <button onClick={onClose}>취소</button>
        </ModalSearchContent>
      </ModalLoginBox>
    </ModalPage>
  );
}