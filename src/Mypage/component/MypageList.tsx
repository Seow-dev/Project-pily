import styled from "styled-components";
import React, { useState } from "react";
import { DataTypes, FeedTypes } from "../../Common/Interface";
import { Link } from "react-router-dom";
import { media } from "../../Common/DeviceSize";
import { StyledPagination } from "../../Mainpage/component/MainPage";
import { MyFeedPreview } from "../../Modal/component/ModalStyles";

interface props {
  listData: DataTypes[];
  own: boolean;
  getFeedData: (data: DataTypes) => void;
  onActivePreview: () => void;
}

export default function MypageList({
  listData,
  own,
  getFeedData,
  onActivePreview,
}: props) {
  const [cur, setCur] = useState<number>(1);

  return (
    <>
      <StyledListWrap>
        {listData
          .map((listEl, idx: number) => (
            <StyledMagazine key={idx}>
              <StyledOverlay />
              <MyFeedPreview
                onClick={() => {
                  onActivePreview();
                  getFeedData(listEl);
                }}
              />
              <Link to={`/magazine/${listEl.title}`}>
                <StyledInfo>
                  <StyledTitle>{listEl.title}</StyledTitle>
                  {!own && (
                    <StyledAuthorWrap>
                      <StyledAuthorImg
                        alt="author"
                        src={listEl.User.authorImg}
                      />
                      <StyledAuthorName>{listEl.User.author}</StyledAuthorName>
                    </StyledAuthorWrap>
                  )}
                </StyledInfo>
              </Link>
            </StyledMagazine>
          ))
          .slice(8 * (cur - 1), 8 * cur)}
      </StyledListWrap>
      <StyledPagination
        current={cur}
        onChange={(page: number) => setCur(page)}
        defaultCurrent={8}
        total={listData.length}
      />
    </>
  );
}

// style
export const StyledListWrap = styled.section`
  display: grid;
  grid-gap: 1rem;
  width: 100%;
  height: 90%;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
    grid-template-rows: none;
  }
`;

const StyledInfo = styled.div`
  position: absolute;
  left: 10px;
  bottom: 30px;
  display: block;
  flex-direction: column;
  z-index: 1;
  padding: 1rem;

  ${media.tablet} {
    bottom: 0px;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
  color: #000;
  width: 7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  ${media.tablet} {
    font-size: 1.2rem;
    width: 12rem;
  }
`;
const StyledAuthorWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const StyledAuthorName = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
  color: #000;

  ${media.tablet} {
    font-size: 1rem;
  }
`;
const StyledAuthorImg = styled.img`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;

  ${media.tablet} {
    width: 25px;
    height: 25px;
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #868e96;
  opacity: 0.3;
  border: none;
  border-radius: 8px;
`;

const StyledMagazine = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: 1rem;
  margin-bottom: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: #ced4da 0 2px 8px;

  transition: all 0.4s;

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  &:hover ${StyledOverlay} {
    opacity: 0;
  }
`;
