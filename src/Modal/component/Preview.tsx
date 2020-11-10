import React from 'react';
import closeIcon from "../../Common/close.png";
import {
  ModalPage,
  ModalOverlay,
  ModalCloseImg,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalFededBox
} from "./ModalStyles"

interface ModalState {
  title: string;
  content: string;
  onClose: () => void;
}


export const PreviewModal = ({title, content, onClose}:ModalState) => {

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
    if(e.target === overlayRef.current){
      onClose();
    }
  }
  return (
    <ModalPage>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}/>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalContent>
          <div className="ql-snow">
            <div className="ql-editor" dangerouslySetInnerHTML={{__html:content}} />
          </div>
        </ModalContent>
      </ModalBox>
    </ModalPage>
  )
}

export const PreviewMagazineModal = ({title, content, onClose}:ModalState) => {

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
    if(e.target === overlayRef.current){
      onClose();
    }
  }
  return (
    <ModalPage>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}/>
      <ModalFededBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalContent>
          <div className="ql-snow">
            <div className="ql-editor" dangerouslySetInnerHTML={{__html:content}} />
          </div>
        </ModalContent>
      </ModalFededBox>
    </ModalPage>
  )
}