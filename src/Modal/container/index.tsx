import React, { useState } from "react";
import Search from "../component/Search";
import { SearchOutlined, MessageOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Login from "../component/Login";
import Action from "../component/Action";

export const Modalpage = () => {
  const [isSearchModalOpen, setSearchModalState] = useState(false);
  const [isLoginModalOpen, setLoginModalState] = useState(false);
  const [isActionModalOpen, setActionModalState] = useState(false);

  const searchToggleModal = () => setSearchModalState(!isSearchModalOpen);
  const loginToggleModal = () => setLoginModalState(!isLoginModalOpen);
  const actionToggleModal = () => setActionModalState(!isActionModalOpen);

  return (
    <div>
      <LoginModal onClick={loginToggleModal}>Login</LoginModal>
      <Login
        title={"Login"}
        isOpen={isLoginModalOpen}
        onClose={loginToggleModal}
      />

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

      <MessageOutlined
        onClick={actionToggleModal}
        style={{
          position: "fixed",
          left: "95%",
          bottom: "5%",
          fontSize: "30px",
        }}
      />
      <Action
        title={"Action"}
        isOpen={isActionModalOpen}
        onClose={actionToggleModal}
      />
    </div>
  );
};

const LoginModal = styled.a`
  position: absolute;
  top: 21px;
  right: 65px;
  fontsize: 15px;
  &:hover {
    color: #ff0000;
  }
`;
