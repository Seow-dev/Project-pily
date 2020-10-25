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
  isOpen: boolean;
  onClose: () => void;
}


export const PreviewModal = ({title, content, isOpen, onClose}:ModalState) => {

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
    if(e.target === overlayRef.current){
      onClose();
    }
  }
  return isOpen?(
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
  ): null;
}

export const PreviewMagazineModal = ({title, content, isOpen, onClose}:ModalState) => {

  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) =>{
    if(e.target === overlayRef.current){
      onClose();
    }
  }
  return isOpen?(
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
  ): null;
}