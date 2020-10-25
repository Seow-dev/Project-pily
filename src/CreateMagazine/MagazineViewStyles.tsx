import styled from "styled-components";
import { Radio } from "antd";

export const MagazineViewWrap = styled.section`
  width: 100%;
  min-height: 1000px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: #868e96 0 1px 4px;
`;
export const ButtonBar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;
export const PublishButton = styled.button`
  padding: 12px 8px;
  font-size: 1rem;
  text-align: center;
  border: 1px solid #343a40;
  background-color: #fff;
  width: fit-content;
  cursor: pointer;
  margin-right: 12px;

  svg {
    font-size: 0.8rem;
    margin-right: 6px;
  }
`;
export const PublishOption = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: #dee2e6 0 1px 4px;
`;
export const OptionItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;
  max-width: 20%;

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
    margin-bottom: 10px;
  }
`;
export const StyledRadio = styled(Radio)`
  font-size: 1rem;
  color: #343a40;

  svg {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;
export const MagazineOptionInput = styled.input`
  width: 100%;
  padding-bottom: 8px;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  border: none;
  border-bottom: 2px solid #343a40;
`;
export const Uploadbox = styled.div`
  display: flex;
  align-items: center;
  border: none;
  input {
    display: none;
  }
`;
export const UploadButton = styled.button`
  font-size: 1rem;
  color: #343a40;
  background-color: #dee2e6;
  border: none;
  border-radius: 3px;
  padding: 5px;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #fff;
    background-color: #69db7c;
    transition: color 0.3s, background-color 0.3s ease;
  }
`;
export const UploadName = styled.div`
  font-size: 1rem;
  font-weight: 400;
  width: 50%;
  color: #343a40;
  padding-bottom: 5px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  line-height: 1rem;
`;

// magazine view
export const HorizontalViewWrap = styled.section<{ align: number }>`
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
  width: 100%;
  min-height: 600px;
  margin-top: 1rem;
`;
export const VirticalViewWrap = styled.section<{ align: number }>`
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
  width: 90%;
  overflow: auto;
  min-height: 800px;
  margin-top: 1rem;
`;
export const MagazineTitleArea = styled.header<{ align: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 2rem;
  text-align: ${props => {
    if (props.align === 1) {
      return "left";
    }
    if (props.align === 2) {
      return "center";
    }
    if (props.align === 3) {
      return "right";
    }
  }};

  min-width: 150px;
  max-width: 100%;
  min-height: 80px;
  width: fit-content;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.5rem;
    border-bottom: 2px solid #495057;
  }
  h5 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0;
    padding-bottom: 12px;
  }
`;
export const HorizontalArticle = styled.article`
  border: 1px solid #495057;
  width: 100%;
  padding: 3rem;

  display: flex;
  gap: 2rem;
  min-height: 700px;
  img {
    vertical-align: bottom;
  }
`;
export const VirticalArticle = styled.article`
  grid-column: 2;
  border: 1px solid #495057;
  width: 100%;
  padding: 1rem;
  min-height: 800px;

  display: flex;
  gap: 2rem;
  img {
    vertical-align: bottom;
  }
`;
export const Columns = styled.div`
  flex: 100px;
  min-width: 0;

  img {
    max-width: 100%;
    max-height: auto;
    text-align: center;
  }
`;
export const Items = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;

  .item-title {
    margin: 0;
    margin-bottom: 12px;
    font-size: 1.5rem;
    font-weight: 600;
    padding-left: 1rem;
  }
  .item-subtitle {
    margin: 0;
    margin-bottom: 12px;
    font-size: 1rem;
    font-weight: 500;
    padding-left: 1rem;
  }
`;
