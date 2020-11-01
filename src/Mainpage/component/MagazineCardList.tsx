import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DataTypes } from "../../Common/Interface";
import { media } from "../../Common/DeviceSize";

interface props {
  datas: DataTypes[];
}

export default function MagazineCardList({ datas }: props) {
  return (
    <Wrapper>
      <HeadCard>
        <h2>
          지금
          <br />
          발행된
          <br />
          매거진
        </h2>
      </HeadCard>
      <CardList>
        {datas.map(data => (
          <CardWrap className="card" key={data.id}>
            <CardImg
              src={
                data.thumbnail
                  ? data.thumbnail
                  : "/image/no_image_indicator.png"
              }
            />
            <Link
              to={`/magazine/${data.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardContent>
                <h2>{data.title}</h2>
                <p>{data.subTitle}</p>
                <UserInfo>
                  <img
                    src={
                      data.User.authorImg
                        ? data.User.authorImg
                        : "/image/default_user.png"
                    }
                  />
                  <p>{data.User.author}</p>
                </UserInfo>
              </CardContent>
              <CardOverlay />
            </Link>
          </CardWrap>
        ))}
      </CardList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const HeadCard = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  flex: 0 0 280px;
  margin: 2rem 1rem 10px;
  background: linear-gradient(
    0deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  border-radius: 10px;
  padding: 2rem;
  height: 400px;
  box-shadow: #adb5bd 1px 1px 8px;

  h2 {
    font-size: 2rem;
    color: #fff;
    margin: 0 0 1rem;
    font-weight: 700;
  }

  ${media.tablet} {
    display: none;
  }
`;

const CardList = styled.section`
  display: flex;
  justify-content: flex-start;
  padding-top: 2rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #f2f3f5;
    border-radius: 10px;
  }

  ${media.tablet} {
    margin-left: 1rem;
  }
`;

const CardWrap = styled.article`
  height: 400px;
  width: 320px;
  min-width: 250px;
  background-color: none;
  box-shadow: #adb5bd -1px 1px 8px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  margin: 0 20px 0 0;
  scroll-snap-align: start;
  clear: both;
  position: relative;
  border-radius: 10px;

  // ${media.medium} {
  //   width: 280px;
  //   min-width: 220px;
  // }

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

  &:hover {
    border-radius: 10px;
  }
`;
const CardOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #adb5bd;
  opacity: 0.7;
  left: 0;
  top: 0;
  z-index: 0;
  border: none;
  border-radius: 10px;

  &:hover {
    opacity: 0.3;
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
  color: #343a40;

  h2 {
    color: inherit;
    opacity: 0.9;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 2px 2px 0 #fff;
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
    text-shadow: 2px 2px 0 #fff;
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
