import styled from "styled-components";

export const FeedLabel = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 2rem;
  color: #495057;

  span {
    font-size: 2rem;
    font-weight: 600;
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
    font-size: 2rem;
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
  font-size: 24px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  p {
    margin: 0;
    margin-right: 12px;
  }

  button {
    width: 32px;
    height: 32px;
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
  align-items: center;
  box-shadow: #ced4da 0 1px 2px;
`;
export const Subtitle = styled.input`
  width: 45%;
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
  }
  &:-ms-input-placeholder {
    color: #495057;
    opacity: 0.4;
    font-weight: 600;
  }
`;
export const Map = styled.div`
  width: 45%;
  height: 300px;
  background-color: yellow;
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
  height: 40vh;
  background-color: green;
  margin-bottom: 1.5rem;
`;
export const SaveButton = styled.button`
  padding: 12px;
  width: fit-content;
  font-size: 1rem;
  color: #495057;
  border: 1px solid #495057;
  box-shadow: #ced4da 1px 1px 2px;
  cursor: pointer;
`;
