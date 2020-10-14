import styled from "styled-components";

export const UserInfo = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 240px;
  padding: 2rem;
  box-shadow: #ced4da 0 1px 4px;
`;
export const UserImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: #ced4da 0 2px 8px;
  object-fit: cover;
`;
export const UserName = styled.h2`
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: 700;
`;
export const MagazineListWrap = styled.section`
  display: grid;
  grid-template-columns: 8.5fr 1.5fr;
  padding: 1rem;
  box-shadow: #ced4da 0 1px 4px;
`;
export const MagazineListContainer = styled.section`
  width: 100%;
  height: 600px;
  padding: 1rem;
  overflow: scroll;
`;
export const SideTabMenu = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
`;
export const TabMenu = styled.div<{ cur?: boolean }>`
  width: 100%;
  padding: 16px 8px;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  color: ${props => (props.cur ? "#fff" : "inherit")};
  background-color: ${props => (props.cur ? "#339af0" : "none")};

  &:hover {
    box-shadow: #ced4da 0 1px 2px;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;
