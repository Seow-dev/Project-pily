import React, { useState } from "react";
import styled from "styled-components";
import { media } from "../../Common/DeviceSize";
import { Row, Col, Pagination, Menu } from "antd";
import "antd/dist/antd.css";
import { results } from "../../Common/Dummy";
import MegazineTile from "./MegazineTile";

export default function MegazineGrid() {
  const [cur, setCur] = useState<number>(1);

  const onChange = (page: number) => {
    console.log(cur);
    setCur(page);
  };
  return (
    <MainWrapper>
      <Menu
        style={{
          background: "none",
          marginBottom: "1rem",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
        mode="horizontal"
      >
        <Menu.Item key="latest">최신</Menu.Item>
        <Menu.Item key="liked">인기</Menu.Item>
      </Menu>
      <Row>
        {results
          .map((result, idx: number) => (
            <Col key={idx} span={6}>
              <MegazineTile megazineData={result} />
            </Col>
          ))
          .slice(12 * (cur - 1), cur * 12)}
      </Row>
      <StyledPagination
        defaultPageSize={12}
        current={cur}
        onChange={onChange}
        total={results.length}
      />
    </MainWrapper>
  );
}

// style
const MainWrapper = styled.div`
  margin: 100px auto;
  width: 1440px;

  // 반응형
  ${media.mobileL} {
  }

  ${media.mobile} {
    margin: 60px auto;
  }
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
