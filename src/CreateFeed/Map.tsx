import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { locationProps } from "../Common/Interface";
import "./MapStyle.css";

declare global {
  interface Window {
    kakao: any;
  }
}
interface props {
  setLocation: ({ place_name, x, y }: locationProps) => void;
}

const Map = ({ setLocation }: props) => {
  const [inputs, setInputs] = useState("");
  const [query, setQuery] = useState("서울역");

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputs(value);
  };
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    setQuery(inputs);
    setInputs("");
  };

  useEffect(() => {
    let infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    let map = new window.kakao.maps.Map(container, options);

    // 장소 검색 객체 생성
    let ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(query, placeSearchCB, { size: 5 }); // 일단 5개만 불러오기

    // 검색된 이후에 동작하는 콜백
    function placeSearchCB(data: locationProps[]) {
      if (window.kakao.maps.services.Status.OK) {
        let bounds = new window.kakao.maps.LatLngBounds();
        for (let i = 0; i < data.length; i += 1) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        map.setBounds(bounds);
      }
    }

    // 지도상에 표시되는 마커 관련 코드
    function displayMarker(places: locationProps) {
      let marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(places.y, places.x),
      });
      window.kakao.maps.event.addListener(marker, "click", function (
        mouseEvent: any,
      ) {
        const content = `<span class="title">${places.place_name}</span>`;

        infowindow.setContent(content);
        infowindow.open(map, marker);

        setLocation({
          place_name: places.place_name,
          x: places.x,
          y: places.y,
        });
      });
    }
  }, [query]);

  return (
    <Wrap>
      <MapDiv id="map" />
      <SearchArea onSubmit={handleSubmit}>
        <SearchInput
          placeholder="장소를 검색해주세요."
          value={inputs}
          onChange={handleInputs}
        />
        <SearchButton type="submit" onSubmit={handleSubmit}>
          검색
        </SearchButton>
      </SearchArea>
    </Wrap>
  );
};

export default Map;

// style
const Wrap = styled.section`
  position: relative;
  width: 100%;
  height: 200px;
`;
const MapDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const SearchArea = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
`;
const SearchInput = styled.input`
  width: fit-content;
  height: 32px;
  border: none;
  margin: 10px 0 0 10px;
  background-color: #fff;
  border: 1px solid #495057;
  font-size: 1rem;
  padding: 3px;
`;
const SearchButton = styled.button`
  width: fit-content;
  height: 30px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #495057;
  border-radius: 3px;
  margin: 10px 0 0 5px;
`;
