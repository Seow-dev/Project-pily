import React, { useState } from 'react';
import styled from 'styled-components';
import closeIcon from '../../Common/close.png';

interface displayModalProps {
  title : string
  isOpen : boolean;
  onClose: () => void;
}

function Login ({title, isOpen, onClose}:displayModalProps){
  
  // 소셜로그인에 따라 로그인시킨 뒤 닉네임 변경으로 저장
 
  const [Data, setData] = useState("");
  
  const onClickHandler = (e:any) => {
    console.log("Selected :", e.target.value);
    setData(e.target.value);
  }
  
  return isOpen?(
    <ModalPage>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose}/>
      <ModalTitle>
          {title}
      </ModalTitle>
        <ModalContent>
          <button value="kakao" onClick={onClickHandler}>
            Login with Kakao
          </button>
          <button value="naver" onClick={onClickHandler} >
            Login with Naver
          </button>
          <button value="google" onClick={onClickHandler}>
            Login with Google
          </button>
        </ModalContent>
      </ModalBox>
    </ModalPage>
  ):null;
}

export default Login;


const ModalPage = styled.div`
  position : absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width : 100vw;
  height: 100vh;
  z-index:3;
`
const ModalBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`
const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #9e25fc;
  font-size: 30px;
`
const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: #6b6b6b;
  font-size: 16px;
`
const ModalCloseImg = styled.img`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 25px;
  height: 25px;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: rotate(180deg);
    cursor: pointer;
  }
`