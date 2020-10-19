import React from 'react';
import styled from 'styled-components';
import closeIcon from '../../Common/close.png';
import useReactRouter from 'use-react-router';

interface displayModalProps {
  title : string
  isOpen : boolean;
  onClose: () => void;
}

function Action ({title, isOpen, onClose}:displayModalProps) {

  const { history } = useReactRouter();

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(e.target === overlayRef.current){
      onClose();
    }
  }

  const redirectToCreateFeed = () =>{
    history.push("/create/feed");
  }
  const redirectToCreateMagazine = () =>{
    history.push('/createmagazine');
  }
  const redirectToMypage = () =>{
    history.push('/mypage');
  }

  return isOpen ? (
    <ModalPage>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}/>
    <ModalBox>
      <ModalCloseImg src={closeIcon} onClick={onClose}/>
    <ModalTitle>
        {title}
    </ModalTitle>
      <ModalContent>
        <button value="Feed" onClick={redirectToCreateFeed}>
          피드 작성하기
        </button>
        <button value="Magazine" onClick={redirectToCreateMagazine}>
          매거진 작성하기
        </button>
        <button value="Mypage" onClick={redirectToMypage}>
          마이 페이지
        </button>
      </ModalContent>
    </ModalBox>
  </ModalPage>
  ): null;
}

export default Action;

// css 작업 해야함 오른쪽 하단에 픽스 된 채로 컨텐츠 보이게끔 / 픽스 아이콘을 누르면 X 아이콘으로 바뀌고 누르면 다시 꺼지게끔

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
const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
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