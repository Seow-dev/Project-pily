import styled from "styled-components";
import { media } from "../../Common/DeviceSize";
import * as React from "react";
import { DataTypes } from "../../Common/Interface";
import { Link } from "react-router-dom";

interface props {
  datas: DataTypes[];
}

export default function MagazineList({ datas }: props) {
  return (
    <ListSection>
      {datas.map(data => (
        <ListItemBox key={data.id}>
          <ItemImg
            src={
              data.thumbnail ? data.thumbnail : "/image/no_image_indicator.png"
            }
          />
          <Link to={`/magazine/${data.id}`} style={{ textDecoration: "none" }}>
            <ItemOverlay />
            <ItemContent>
              <h3>{data.title}</h3>
              <p>{data.User.author}</p>
            </ItemContent>
          </Link>
        </ListItemBox>
      ))}
    </ListSection>
  );
}

// style
const ListSection = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  margin-top: 1rem;

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(90px, 1fr));
  }
  ${media.tablet} {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }
`;
const ListItemBox = styled.div`
  width: 100%;
  height: 200px;
  box-shadow: #ced4da 0 1px 4px;
  background-color: none;
  position: relative;

  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  border-radius: 8px;

  &:hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;
const ItemImg = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
const ItemOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #868e96;
  opacity: 0.3;
  border: none;
  border-radius: 8px;

  &:hover {
    opacity: 0;
  }
`;
const ItemContent = styled.article`
  position: absolute;
  left: 15px;
  bottom: 15px;
  display: flex;
  flex-direction: column;
  font-family: "Noto Serif KR", serif;
  color: #fff;
  padding: 10px;

  h3 {
    color: #343a40;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-word;
    overflow: hidden;
  }

  p {
    color: #343a40;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-;
  }
`;
