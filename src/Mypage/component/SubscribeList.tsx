import React from "react";
import styled from "styled-components";
import { StyledListWrap } from "./MypageList";
import { UserData } from "../../Common/Interface";
import { Link } from "react-router-dom";

interface props {
  listData: UserData[];
}

export default function SubscribeList({ listData }: props) {
  const unSubscribe = (username: string) => {
    if (window.confirm(`정말 ${username}님의 구독을 취소하시겠습니까?`)) {
      console.log("취소");
      // unSubscirbeApi(username)
    } else {
      return;
    }
  };

  return (
    <StyledListWrap>
      {listData.map((listEl, idx: number) => (
        <SbUserCard key={idx}>
          <SbUserImage src={listEl.profileImage} />
          <SbUserName>{listEl.username}</SbUserName>
          <SbDetailButton>
            <Link to={`/user/${listEl.username}`}>자세히 알아보기</Link>
          </SbDetailButton>
          <SbCancelButton onClick={() => unSubscribe(listEl.username)}>
            구독 취소하기
          </SbCancelButton>
        </SbUserCard>
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
  width: 200px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #495057;
  box-shadow: #ced4da 0 1px 4px;
`;
const SbUserImage = styled.img`
  width: 72px;
  height: 72px;
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
  font-weight: 600;
  text-align: center;
`;
const SbDetailButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  padding: 4px 10px;
  border: none;
  border-radius: 3px;
  background-color: #51cf66;
  width: 135px;
  dipslay: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;

  a {
    color: inherit;
  }
`;
const SbCancelButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  padding: 4px 10px;
  border: none;
  border-radius: 3px;
  background-color: #fa5252;
  width: 135px;
  dipslay: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  cursor: pointer;

  a {
    color: inherit;
  }
`;
