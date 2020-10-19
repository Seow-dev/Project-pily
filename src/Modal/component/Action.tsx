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
import useReactRouter from "use-react-router";
import { displayModalProps } from "../../Common/Interface";

function Action({ title, isOpen, onClose }: displayModalProps) {
  const { history } = useReactRouter();

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
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
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick} />
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>{title}</ModalTitle>
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
  ) : null;
}

export default Action;

// css 작업 해야함 오른쪽 하단에 픽스 된 채로 컨텐츠 보이게끔 / 픽스 아이콘을 누르면 X 아이콘으로 바뀌고 누르면 다시 꺼지게끔
