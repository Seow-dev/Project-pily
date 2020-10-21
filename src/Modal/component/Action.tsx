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
import { displayModalProps } from "../../Common/Interface";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Modules";

function Action({ title, isOpen, onClose }: displayModalProps) {
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const { success } = useSelector((state: RootState) => state.authReducer);

  return isOpen ? (
    <ModalPage>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick} />
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>{title}</ModalTitle>
        {success ? (
          <ModalContent>
            <button>
              <Link style={{ color: "black" }} to="/create/feed">
                피드 작성하기
              </Link>
            </button>
            <button>
              <Link style={{ color: "black" }} to="/create/magazine">
                매거진 작성하기
              </Link>
            </button>
            <button>
              <Link style={{ color: "black" }} to="/create/feed">
                마이페이지
              </Link>
            </button>
          </ModalContent>
        ) : (
          <>
            <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
              로그인을 하면 일상을 발행할 수 있습니다.
            </h2>
            <ModalContent style={{ marginTop: "2rem" }}>
              <button disabled>피드 작성하기</button>
              <button disabled>매거진 작성하기</button>
              <button disabled>마이페이지</button>
            </ModalContent>
          </>
        )}
      </ModalBox>
    </ModalPage>
  ) : null;
}

export default Action;

// css 작업 해야함 오른쪽 하단에 픽스 된 채로 컨텐츠 보이게끔 / 픽스 아이콘을 누르면 X 아이콘으로 바뀌고 누르면 다시 꺼지게끔
