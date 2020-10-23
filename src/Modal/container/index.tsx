import React, { useState } from "react";
import Search from "../component/Search";
import { SearchOutlined } from "@ant-design/icons";
import { LoginModal } from '../component/ModalStyles';
import Login from "../component/Login";
import Action from "../component/Action";
import SignUp from "../component/SignUp";
import { RootState } from "../../Modules";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Modules/auth";
import { signOutApi } from "../../Api/auth";

export const Modalpage = () => {
  const [isSearchModalOpen, setSearchModalState] = useState(false);
  const [isLoginModalOpen, setLoginModalState] = useState(false);
  // const [isActionModalOpen, setActionModalState] = useState(false);
  const [isSignUpModalOpen, setSignUpModalState] = useState(false);

  const searchToggleModal = () => setSearchModalState(!isSearchModalOpen);
  const loginToggleModal = () => setLoginModalState(!isLoginModalOpen);
  // const actionToggleModal = () => setActionModalState(!isActionModalOpen);
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
        <LoginModal onClick={handleSignout}>Logout</LoginModal>
      ) : (
        <>
          <LoginModal onClick={loginToggleModal}>Login</LoginModal>
          <Login
            title={"Login"}
            isOpen={isLoginModalOpen}
            onClose={loginToggleModal}
            toSignUp={signUpToggleModal}
          />
        </>
      )}

      <SearchOutlined
        onClick={searchToggleModal}
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          marginTop: "20px",
          marginRight: "30px",
          fontSize: "23px",
        }}
      />
      <Search
        title={"Search"}
        isOpen={isSearchModalOpen}
        onClose={searchToggleModal}
      />
      <Action/>
      <SignUp
        title={"회원가입"}
        isOpen={isSignUpModalOpen}
        onClose={signUpToggleModal}
      />
    </div>
  );
};


