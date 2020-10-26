import styled from "styled-components";

export const PreviewBackground = styled.div`
  position: fixed;
  z-index: 100;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  background-color: #343a40;
`;
export const PreviewModal = styled.section`
  position: fixed;
  z-index: 102;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  width: 95%;
  height: 85%;
  padding: 1rem;
  opacity: 1;
  background-color: #f8f9fa;
  border-radius: 5px;
  overflow: auto;
`;
export const ConfirmButton = styled.button`
  width: fit-content;
  padding: 8px;
  border: none;
  border-radius: 3px;
  background-color: #4dabf7;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
`;
