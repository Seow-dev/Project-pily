import React, { useEffect, useState } from "react";
import { ModalPage, ModalBox, ModalTitle, ModalContent } from "./ModalStyles";
import { displayModalProps } from "../../Common/Interface";

export default function SignUp({ title, isOpen, onClose }: displayModalProps) {
  const [nick, setNick] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };

  const [valid, setValid] = useState(true);
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 서버에 회원가입 관련 닉네임 데이터를 날립니다.
    e.preventDefault();
    if (valid) {
      console.log("유효한 인증 방식입니다."); // 비동기 로직 여기에
      setNick("");
      setValid(false);
      onClose();
    }
  };

  useEffect(() => {
    // nick 값이 변경될 때마다 서버에 중복 검사 요청을 날립니다.
    console.log("중복 검사 요청");
  }, [nick]);

  return isOpen ? (
    <ModalPage>
      <ModalBox>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          <input
            value={nick}
            onChange={handleChange}
            placeholder="닉네임을 입력해주세요."
          />
          <button onClick={handleSignUp}>회원가입</button>
        </ModalContent>
      </ModalBox>
    </ModalPage>
  ) : null;
}
