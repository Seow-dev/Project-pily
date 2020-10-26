import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataTypes } from "../../Common/Interface";

interface props {
  datas: DataTypes[];
}

export default function MagazineCardList({ datas }: props) {
  return (
    <CardList>
      {datas.map(data => (
        <CardWrap className="card" key={data.megazineId}>
          <CardImg
            src={
              data.thumbnail ? data.thumbnail : "/image/no_image_indicator.png"
            }
          />
          <Link
            to={`/magazine/${data.megazineId}`}
            style={{ textDecoration: "none" }}
          >
            <CardOverlay />
            <CardContent>
              <h2>{data.title}</h2>
              <p>{data.subTitle}</p>
              <UserInfo>
                <img
                  src={
                    data.authorImg ? data.authorImg : "/image/default_user.png"
                  }
                />
                <p>{data.author}</p>
              </UserInfo>
            </CardContent>
          </Link>
        </CardWrap>
      ))}
    </CardList>
  );
}

const CardList = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f2f3f5;
    border-radius: 10px;
  }
`;

const CardWrap = styled.article`
  height: 400px;
  width: 320px;
  min-width: 250px;
  border-radius: 10px;
  box-shadow: -1px 1px 8px #343a40;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  margin: 0;
  scroll-snap-align: start;
  clear: both;
  position: relative;

  &:focus-within ~ .card,
  &:hover ~ .card {
    transform: translateX(130px);
  }
  &:hover {
    transform: translateY(-1rem);
  }
  &:not(:first-child) {
    margin-left: -130px;
  }
`;
const CardImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #343a40;
  opacity: 0.5;
  left: 0;
  top: 0;
  z-index: 0;
  border-radius: 10px;
  border: none;

  &:hover {
    opacity: 0;
  }
`;
const CardContent = styled.section`
  position: absolute;
  left: 8px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Serif KR", serif;
  padding: 1rem;
  color: #fff;

  h2 {
    color: inherit;
    opacity: 0.9;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    margin-bottom: 12px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
    line-height: 2.6rem;
  }

  p {
    color: inherit;
    opacity: 0.9;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 12px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    border: none;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin-right: 8px;
    opacity: 0.7;
  }
  p {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    color: inherit;
    opacity: 0.7;
  }
`;
