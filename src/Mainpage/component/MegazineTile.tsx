import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataTypes } from "../../Common/Interface";

interface props {
  megazineData: DataTypes;
}

export default function MegazineTile({ megazineData }: props) {
  return (
    <Link to={`/magazine/${megazineData.title}`}>
      <MegazineWrapper>
        <MegazineImg src={megazineData.thumbnail} />
        <MegazineInfo>
          <MegazineTitle>{megazineData.title}</MegazineTitle>
          <MegazineSubtitle>{megazineData.subTitle}</MegazineSubtitle>
          <AuthorWrap>
            <AuthorImg alt="author" src={megazineData.authorImg} />
            <Authorname>{megazineData.author}</Authorname>
          </AuthorWrap>
        </MegazineInfo>
      </MegazineWrapper>
    </Link>
  );
}

// style
const MegazineWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem;
  position: relative;
`;
const MegazineImg = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  vertical-align: middle;
  opacity: 0.9;
  border-radius: 8px;

  &:hover {
    transform: scale(1.02, 1.02);
    opacity: 1;
    transition: transform 0.3s ease-in-out;
  }
`;
const MegazineInfo = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  position: absolute;
  top: 40%;
  left: 20%;
  transform: translate(-20%, -30%);
`;
const MegazineTitle = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1rem;
  color: #fff;
`;
const MegazineSubtitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
  color: #fff;
`;
const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;
const Authorname = styled.p`
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
`;
const AuthorImg = styled.img`
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;
