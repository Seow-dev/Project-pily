import React, { useState } from "react";
import Search from "../component/Search";

import {
  LoginModal,
  StyledSearchOutlined,
  MyFeedPreview,
} from "../component/ModalStyles";
import Login from "../component/Login";
import Action from "../component/Action";
import SignUp from "../component/SignUp";
import { RootState } from "../../Modules";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Modules/auth";
import { signOutApi } from "../../Api/auth";
import { PreviewModal } from "../component/Preview";

interface PreaviewState {
  title: string;
  content: string;
}

export const Modalpage = () => {
  const [isSearchModalOpen, setSearchModalState] = useState(false);
  const [isLoginModalOpen, setLoginModalState] = useState(false);
  const [isSignUpModalOpen, setSignUpModalState] = useState(false);

  const searchToggleModal = () => setSearchModalState(!isSearchModalOpen);
  const loginToggleModal = () => setLoginModalState(!isLoginModalOpen);
  const signUpToggleModal = () => {
    setLoginModalState(false);
    setSignUpModalState(!isSignUpModalOpen);
  };

  const dispatch = useDispatch();
  const loginState = useSelector(
    (state: RootState) => state.authReducer.success,
  );
  const handleSignout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(signOut());
    signOutApi();
  };

  return (
    <div>
      {loginState ? (
        <LoginModal onClick={handleSignout} style={{ color: "#ff0000" }}>
          Logout
        </LoginModal>
      ) : (
        <>
          <LoginModal onClick={loginToggleModal}>Login</LoginModal>
          {isLoginModalOpen ? (
            <Login
              title={"Login"}
              onClose={loginToggleModal}
              toSignUp={signUpToggleModal}
            />
          ) : null}
        </>
      )}

      <StyledSearchOutlined onClick={searchToggleModal} />
      {isSearchModalOpen ? (
        <Search title={"Search"} onClose={searchToggleModal} />
      ) : null}
      <Action />
      {isSignUpModalOpen ? (
        <SignUp title={"회원가입"} onClose={signUpToggleModal} />
      ) : null}
    </div>
  );
};

export const PreviewMyPage = ({ title, content }: PreaviewState) => {
  const [isPreviewModalOpen, setPreviewModalState] = useState(false);
  const previewToggleModal = () => setPreviewModalState(!isPreviewModalOpen);

  return (
    <>
      <MyFeedPreview onClick={previewToggleModal} />
      <PreviewModal
        title={title}
        content={content}
        isOpen={isPreviewModalOpen}
        onClose={previewToggleModal}
      />
    </>
  );
};
