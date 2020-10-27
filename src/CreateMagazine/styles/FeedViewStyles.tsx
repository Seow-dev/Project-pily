import styled, { css } from "styled-components";
import { DatePicker } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// feed 조회 관련 스타일
export const FeedViewWrap = styled.section`
  width: 100%;
  min-width: 400px;
  height: 1000px;
  padding: 1rem;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 0.5fr 1.5fr 0.5fr 7.5fr;
  background-color: #fff;
  box-shadow: #868e96 0 1px 4px;
`;
export const ControllerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: #dee2e6 0 1px 2px;
  padding: 1.5rem 20px;

  section:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
export const Label = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
`;
export const SearchBox = styled.section<{ on: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  input {
    width: 80%;
    height: 48px;
    font-size: 1rem;
    padding-left: 8px;
    border: 1px solid #495057;
    border-radius: 3px;
    background-color: #fff;

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 400;
    }

    &:-ms-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 400;
    }
  }

  button {
    width: 15%;
    height: 48px;
    font-size: 1rem;

    ${props => {
      if (props.on === 1) {
        return css`
          color: #fff;
          border: 2px solid #339af0;
          background-color: #339af0;
          border-radius: 3px;
          font-weight: 700;
        `;
      } else {
        return css`
          color: #495057;
          background-color: #fff;
          border: 1px solid #495057;
          border-radius: 3px;
          font-weight: 500;
        `;
      }
    }}
    cursor: pointer;
  }
`;
export const SelectBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 48px;
  border: 1px solid #495057;
`;

export const FeedContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
  align-items: stretch;
  justify-items: stretch;
  overflow: scroll;
  -ms-overflow-style: none;
  scroll-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Feed = styled.div<{ active: number }>`
  width: 100%;
  height: 115px;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    box-shadow: #dee2e6 0 2px 8px;
    // transform: translateY(-4px);
    // transition: box-shadow 0.3s, transform 0.3s;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .createAtOff {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: #ced4da;
  }
  ${props => {
    if (props.active === 1) {
      return css`
        background-color: #51cf66;
        h2 {
          color: #fff;
        }
        .createAtOn {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 400;
          color: #fff;
        }
      `;
    } else {
      return css`
        border: 1px solid #868e96;
      `;
    }
  }}
`;
export const CloseButton = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  // float: right;
  cursor: pointer;
  svg {
    font-size: 1.5rem;
  }
`;

export const StyledSearchOutlined = styled(SearchOutlined)`
  position: relative;
  top:30px;
  left:185px;
  font-size: 20px;
  border:1px solid black;
  border-radius:5px;
  background-color: white;
`