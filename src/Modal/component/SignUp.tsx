import React, { useEffect, useState } from "react";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalSearchContent,
} from "./ModalStyles";
import { displayModalProps } from "../../Common/Interface";
import { signUpApi, vaildateUsernameApi } from "../../Api/auth";
import { FcCancel, FcCheckmark } from "react-icons/fc";


export default function SignUp({ title, onClose }: displayModalProps) : JSX.Element {
  const [nick, setNick] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
  };


  const [valid, setValid] = useState(true);
  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // 서버에 회원가입 관련 닉네임 데이터를 날립니다.
    e.preventDefault();
    if (valid) {
      const result = await signUpApi(nick); // 비동기 로직 여기에
      if (result.status === 200) {
        setNick("");
        // setValid(false);
        onClose();
      } else {
        alert("닉네임을 다시 정해주세요.");
        setNick("");
      }
    }
  };
  // 스타일에 대한 스테이트 validate => 스타일...

  useEffect(() => {
    // nick 값이 변경될 때마다 서버에 중복 검사 요청을 날립니다.
    // setVaild를 이용해서 valid의 값을 True, False로 변경하게 하며, True일때 회원가입 가능 / False일땐 불가능
    
    // vaildateUsernameApi(nick);
    console.log("중복 검사 요청");
    console.log(valid);
  }, [nick]);

  return(
    <ModalPage>
      <ModalBox>
        <ModalTitle>{title}</ModalTitle>
        <ModalSearchContent>
          { valid ? (
            <>
              <FcCheckmark style={{fontSize:"20px", marginRight:"5px"}}/>
              <input
                value={nick}
                onChange={handleChange}
                placeholder="닉네임을 입력해주세요."
              />
              <button onClick={handleSignUp}>회원가입</button>
            </>
          ) : (
            <>
            <FcCancel style={{fontSize:"20px", marginRight:"5px"}}/>
              <input
                value={nick}
                onChange={handleChange}
                placeholder="닉네임을 입력해주세요."
                style={{color: "red" }}
              />
              <button onClick={handleSignUp} disabled >회원가입</button>
            </>
          )}
          <button onClick={onClose}>취소</button>
        </ModalSearchContent>
      </ModalBox>
    </ModalPage>
  );
}
