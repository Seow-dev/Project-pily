import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../Common/DeviceSize";
import { Row, Col, Pagination } from "antd";
import "antd/dist/antd.css";
import MagazineTile from "./MagazineTile";

import { Modalpage } from "../../Modal/container";
import { DataTypes } from "../../Common/Interface";
import { results } from "../../Common/Dummy";


export default function MagazineGrid() {
  const [cur, setCur] = useState<number>(1);
  const [menu, setMenu] = useState<string>("created_at");
  const [magazine, setMegazine] = useState<DataTypes[]>([]);

  useEffect(() => {
    // 처음에 호출하고, cur, menu값에 따라서 다른 데이터 불러오는 api 반영
    console.log(cur, menu);
    setMegazine(results);
  }, [cur, menu]);

  const changePage = (page: number) => {
    setCur(page);
  };

  return (
    <MainWrapper>
      <Modalpage />
      <MainPhrase style={{ color: "#D58936" }}>
        일상을 발행하다. <span style={{ color: "#A3320B" }}>PILY</span>
      </MainPhrase>
      <MainLabel>매거진</MainLabel>
      <MenuWrap>
        {menu === "created_at" ? (
          <Menus cur value="created_at">
            최신
          </Menus>
        ) : (
          <Menus value="created_at" onClick={() => setMenu("created_at")}>
            최신
          </Menus>
        )}
        {menu === "like" ? (
          <Menus cur value="like">
            인기
          </Menus>
        ) : (
          <Menus value="like" onClick={() => setMenu("like")}>
            인기
          </Menus>
        )}
      </MenuWrap>
      <Row>
        {magazine
          .map((result, idx) => (
            <Col key={idx} span={12}>
              <MagazineTile magazineData={result} />
            </Col>
          ))
          .slice(4 * (cur - 1), cur * 4)}
      </Row>
      <StyledPagination
        defaultPageSize={8}
        current={cur}
        onChange={changePage}
        total={magazine.length}
      />
    </MainWrapper>
  );
}

// style
export const MainWrapper = styled.div`
  margin: 100px auto;
  width: 1280px;

  // 반응형
  ${media.desktop} {
    width: 760px;
  }
  ${media.tablet} {
    margin: 60px auto;
    width: 100%;
  }
`;
const MainPhrase = styled.h2`
  padding: 1rem;
  font-size: 3rem;
  font-weight: 700;
  font-family: Roboto;
`;
const MainLabel = styled.h3`
  padding: 2rem 1rem 0 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Roboto;
`;
export const StyledPagination = styled(Pagination)`
  text-align: center;
  font-size: 1.4rem;
  margin-top: 1rem;
  background: none;
  border: none;

  li {
    background: none;
    border: none;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in;
    }

    .ant-pagination-item-link {
      background: none;
      border: none;
    }

    .ant-pagination-options {
      background: none;
    }
  }
`;
const MenuWrap = styled.ul`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-top: 1rem;
`;
const Menus = styled.li<{ cur?: boolean }>`
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  width: 60px;
  border: none;
  padding: 1rem 0;
  margin-right: 10px;

  &:after {
    content: "";
    display: block;
    margin: 7px 0;
    width: 32px;
    border-bottom: 3px solid
      ${props => {
        if (props.cur) return "#339af0";
        else return "#f8f9fa";
      }};
  }
  transition: all 0.4s linear;

  color: ${props => {
    if (props.cur) return "#339af0";
    else return "#868e96";
  }};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.4s linear;
  }
`;
