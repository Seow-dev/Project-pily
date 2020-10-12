import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { media } from "../../Common/DeviceSize";
import { Row, Col, Pagination, Menu } from "antd";
import "antd/dist/antd.css";
import MegazineTile from "./MegazineTile";

interface props {
  megazineData: object[];
}

export default function MegazineGrid({ megazineData }: props) {
  const [cur, setCur] = useState(1);
  const [menu, setMenu] = useState<string>("latest");

  const onChange = (page: number) => {
    setCur(page);
  };

  return (
    <MainWrapper>
      <MainPhrase style={{ color: "#D58936" }}>
        일상을 발행하다. <span style={{ color: "#A3320B" }}>PILY</span>
      </MainPhrase>
      <MainLabel>매거진</MainLabel>
      <Menu
        onChange={(info: any) => {
          setMenu(info.key);
          console.log(menu);
        }}
        style={{
          background: "none",
          marginBottom: "1rem",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
        mode="horizontal"
        selectedKeys={[menu]}
      >
        <Menu.Item key="latest">최신</Menu.Item>
        <Menu.Item key="liked">인기</Menu.Item>
      </Menu>
      <Row>
        {megazineData
          .map((result, idx) => (
            <Col key={idx} span={12}>
              <MegazineTile megazineData={result} />
            </Col>
          ))
          .slice(4 * (cur - 1), cur * 4)}
      </Row>
      <StyledPagination
        defaultPageSize={8}
        current={cur}
        onChange={onChange}
        total={megazineData.length}
      />
    </MainWrapper>
  );
}

// style
const MainWrapper = styled.div`
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
  padding: 1rem 1rem 0 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Roboto;
`;
const StyledPagination = styled(Pagination)`
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
