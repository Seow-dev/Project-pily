import styled, { css } from "styled-components";

export const DetailWrap = styled.section<{ vertical: boolean }>`
  width: ${props => {
    if (props.vertical === true) {
      return "75%";
    } else {
      return "90%";
    }
  }};
  margin: 60px auto;
`;
export const DetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailHead = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  max-height: 500px;
`;
export const CoverImg = styled.div<{ url?: string }>`
  ${props => {
    if (props.url) {
      return css`
        background-image: url(${props.url});
        height: 300px;
        max-height: 500px;
      `;
    }
  }};

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;
export const CoverDiv = styled.div`
  position: relative;
  height: 300px;
  border: 2px solid #343a40;
`;
export const CoverHead = styled.div`
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;
export const CoverText = styled.div`
  margin: 0 auto;
  max-width: 90%;
  width: 1000px;
`;
export const CoverTitle = styled.header<{ align: number; only?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => {
    if (props.align === 1) {
      return "flex-start";
    }
    if (props.align === 2) {
      return "center";
    }
    if (props.align === 3) {
      return "flex-end";
    }
  }};
  color: ${props => {
    if (props.only === true) {
      return "#343a40";
    } else {
      return "#f1f3f5";
    }
  }};

  h1 {
    color: inherit;
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.5rem;
    border-bottom: 3px solid #f1f3f5;
    width: fit-content;
  }

  h5 {
    color: inherit;
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  p {
    color: inherit;
    font-size: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #51cf66;
    width: fit-content;
  }
`;

export const CoverUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  div {
    img {
      border: none;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      box-shadow: #868e96 0 1px 3px;
    }

    p {
      color: inherit;
      font-size: 1.3rem;
      font-weight: 400;
      margin: 0;
      margin-left: 10px;
      border: none;
      a {
        text-decoration: none;
      }
    }
  }
`;
export const CoverOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LikeButton = styled.button`
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px;
  text-align: center;
  background-color: none;
  margin-left: 10px;

  svg {
    margin-left: 5px;
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
export const SubButton = styled.button<{ active: boolean }>`
  border-radius: 50%;
  border: none;
  font-size: 1.2rem;

  cursor: pointer;
  padding: 4px;
  text-align: center;
  background-color: none;

  svg {
    margin-left: 5px;
    font-size: 1rem;
    color: ${props => (props.active ? "#40c057" : "#d3f9d8")};
  }

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
