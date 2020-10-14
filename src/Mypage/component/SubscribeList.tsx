import React from "react";
import styled from "styled-components";
import { StyledListWrap } from "./MypageList";
import { UserData } from "../../Common/Interface";
import { Link } from "react-router-dom";

interface props {
  listData: UserData[];
}

export default function SubscribeList({ listData }: props) {
  return (
    <StyledListWrap>
      {listData.map((listEl, idx: number) => (
        <Link key={idx} to={`/user/${listEl.username}`}>
          <SbUserCard>
            <SbUserImage src={listEl.profileImage} />
            <SbUserName>{listEl.username}</SbUserName>
          </SbUserCard>
        </Link>
      ))}
    </StyledListWrap>
  );
}

// style

const SbUserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  width: 120px;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #495057;
  box-shadow: #ced4da 0 1px 4px;
`;
const SbUserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;
const SbUserName = styled.h3`
  margin: 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;
