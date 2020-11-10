import styled from "styled-components";
import { Rate } from "antd";
import { media } from "../Common/DeviceSize";

export const FeedLabel = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 0.6rem;
  color: #495057;

  span {
    font-size: 2rem;
    font-weight: 600;
    ${media.desktop} {
      font-size: 1.5rem;
    }
  }

  ${media.desktop} {
    font-size: 1.5rem;
    padding-left: 1rem;
  }
`;
export const Head = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  box-shadow: #ced4da 0 1px 2px;
`;
export const Title = styled.section`
  border: none;
  background: none;
  padding-bottom: 0.8rem;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: #ced4da 0 1px 2px;

  input {
    width: 100%;
    display: block;
    padding: 12px;
    background: none;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 1.5rem;
    color: #495057;
    &:focus {
      outline: none;
    }
    &::-webkit-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 600;
    }
    &:-ms-input-placeholder {
      color: #495057;
      opacity: 0.4;
      font-weight: 600;
    }
  }

  div {
    display: block;
    width: 80px;
    border: none;
    background: none;
    margin: 10px 0 0 12px;
    border-bottom: 6px solid #495057;
  }
`;
export const OptionSlide = styled.section`
  width: 100%;
  font-size: 20px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin: 1rem 0 0.5rem 0;

  p {
    margin: 0;
    margin-right: 12px;
  }

  button {
    width: 25px;
    height: 25px;
    font-size: 14px;
    background-color: #f1f3f5;
    box-shadow: #ced4da 0 1px 2px;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
`;

export const Option = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  align-items: center;
  border: 1px solid black;
  box-shadow: #ced4da 0 1px 2px;

  ${media.tablet} {
    flex-direction: column;
  }
`;
export const OptionWrap = styled.section`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  div:nth-child(1) {
    margin-bottom: 2.5rem;

    ${media.tablet} {
      margin-bottom: 0;
    }
  }

  ${media.tablet} {
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    margin-bottom: 2rem;
  }
`;
export const Labels = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;

  ${media.tablet} {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
export const Subtitle = styled.input`
  width: 80%;
  border: none;
  border-bottom: 2px solid #495057;
  background: none;
  padding-bottom: 12px;
  font-weight: 500;
  font-size: 1.2rem;

  &::-webkit-input-placeholder {
    color: #495057;
    opacity: 0.4;
    font-weight: 600;
    ${media.tablet} {
      font-weight: 400;
    }
  }
  &:-ms-input-placeholder {
    color: #495057;
    opacity: 0.4;
    font-weight: 600;
    ${media.tablet} {
      font-weight: 400;
    }
  }

  ${media.tablet} {
    font-size: 0.9rem;
    border-bottom: 1px solid #495057;
    padding-bottom: 6px;
  }
`;
export const MapArea = styled.div`
  width: 45%;
  height: 250px;

  ${media.tablet} {
    width: 100%;
    height: 300px;
  }
`;

export const EditArea = styled.section`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: #ced4da 0 1px 2px;
`;
export const EditorWrap = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;
export const SaveButton = styled.button`
  // margin-Top:3rem;
  padding: 12px;
  width: fit-content;
  font-size: 1rem;
  color: #495057;
  border: 1px solid #495057;
  box-shadow: #ced4da 1px 1px 2px;
  cursor: pointer;
`;

export const StyledRate = styled(Rate)`
  font-size: 2.2rem;
  height: 50px;

  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

export const Wrapdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const MapInput = styled.input`
  font-size: 1rem;
  margin: 0 0 15px 20px;
  border: none;
  border-bottom: 1px solid #343a40;
  padding-bottom: 5px;
  width: fit-content;

  ${media.tablet} {
    font-size: 0.8rem;
    margin: 0 0 15px 0;
  }
`;
