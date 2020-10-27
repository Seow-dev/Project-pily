import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "../../Common/DeviceSize";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { Modalpage } from "../../Modal/container";
import { DataTypes } from "../../Common/Interface";
import { results } from "../../Common/Dummy";
import MagazineCardList from "./MagazineCardList";
import MagazineList from "./MagazineList";

export default function Mainpage() {
  const [cur, setCur] = useState<number>(1);
  const [menu, setMenu] = useState("created_at");
  const [selected, setSelected] = useState<DataTypes[]>([]);
  const [magazine, setMagazine] = useState<DataTypes[]>([]);

  useEffect(() => {
    // 처음에 호출하고, cur, menu값에 따라서 다른 데이터 불러오는 api 반영
    if (menu === "created_at") {
      setSelected(results.filter(result => result.megazineId % 4 === 0));
      setMagazine(results);
    } else if (menu === "like") {
      setSelected(results.filter(result => result.megazineId % 4 === 0));
      setMagazine(results);
    }
  }, [menu]);

  const changePage = (page: number) => {
    setCur(page);
  };

  return (
    <MainWrapper>
      <Modalpage />
      <MainPhrase style={{ color: "#D58936" }}>
        일상을 발행하다. <span style={{ color: "#A3320B" }}>PILY</span>
      </MainPhrase>
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
      <SlideWrap>
        <MagazineCardList
          menus={menu}
          headers={menu === "created_at" ? "발행된" : "인기있는"}
          datas={selected}
        />
      </SlideWrap>
      <div style={{ padding: "1rem" }}>
        <MainLabel>
          {menu === "created_at"
            ? "지금 인기있는 매거진"
            : "지금 발행된 매거진"}
        </MainLabel>
        <MagazineList datas={magazine.slice(15 * (cur - 1), 15 * cur)} />
        <StyledPagination
          current={cur}
          onChange={changePage}
          defaultCurrent={1}
          defaultPageSize={15}
          total={magazine.length}
        />
      </div>
    </MainWrapper>
  );
}

// style
export const MainWrapper = styled.div`
  margin: 80px auto;
  width: 1400px;

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
  font-family: "Noto Serif KR", serif;
`;
const MainLabel = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  margin: 0 0 1.8rem;
  padding-bottom: 8px;
  width: fit-content;
  border-bottom: 4px solid #343a40;
`;
export const StyledPagination = styled(Pagination)`
  text-align: center;
  font-size: 1.2rem;
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
    width: 42px;
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
const SlideWrap = styled.section`
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;
