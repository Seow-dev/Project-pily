import styled from "styled-components";

export const MagazineViewWrap = styled.section`
  width: 100%;
  height: 1000px;
  display: grid;
  grid-template-rows: 0.7fr 9.3fr;
  row-gap: 1rem;
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

// magazine view
export const HorizontalViewWrap = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 9fr 0.5fr;
  width: 100%;
`;
export const VirticalViewWrap = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 8.4fr 0.8fr;
  width: 100%;
  overflow: auto;
`;
export const HorizontalArticle = styled.article`
  grid-row: 2;
  border: 1px solid green;
  width: 100%;
  padding: 1rem;
`;
export const VirticalArticle = styled.article`
  grid-column: 2;
  border: 1px solid green;
  width: 100%;
  padding: 1rem;
`;
