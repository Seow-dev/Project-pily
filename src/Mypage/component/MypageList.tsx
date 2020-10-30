import styled from "styled-components";
import React, { useState } from "react";
import { DataTypes } from "../../Common/Interface";
import { Link } from "react-router-dom";
import { media } from "../../Common/DeviceSize";
import { StyledPagination } from "../../Mainpage/component/MainPage";
import { PreviewMyPage } from "../../Modal/container";

interface props {
  listData: DataTypes[];
  own: boolean;
}

export default function MypageList({ listData, own }: props) {
  const [cur, setCur] = useState<number>(1);

  return (
    <>
      <StyledListWrap>
        {listData
          .map((listEl, idx: number) => (
            <StyledMagazine>
              <PreviewMyPage title={listEl.title} content={listEl.content} />
              <Link key={idx} to={`/magazine/${listEl.title}`}>
                <StyledInfo>
                  <StyledTitle>{listEl.title}</StyledTitle>
                  {!own && (
                    <StyledAuthorWrap>
                      <StyledAuthorImg alt="author" src={listEl.authorImg} />
                      <StyledAuthorName>{listEl.author}</StyledAuthorName>
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
  grid-template-columns:
    repeat(4, minmax(100px, 1fr))
  };
  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(80px, 1fr));
    overflow: auto;
  }
  // align-items: center;
  // justify-content: center;
`;
const StyledMagazine = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 200px;
  margin-right: 1rem;
  margin-bottom: 12px;
  border: none;
  border-radius: 5px;
  box-shadow: #ced4da 0 2px 8px;
`;

const StyledInfo = styled.div`
  position: absolute;
  left: 10px;
  bottom: 30px;
  display: block;
  flex-direction: column;
  z-index: 1;
  padding: 1rem;
`;
const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
  color: #000;
  width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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
`;
const StyledAuthorImg = styled.img`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;
