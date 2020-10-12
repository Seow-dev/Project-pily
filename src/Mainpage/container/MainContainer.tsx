import React, { useEffect } from "react";
import { results } from "../../Common/Dummy";
import MegazineGrid from "../component/MegazineGrid";

export default function MainContainer() {
  const getAllMagazine = async () => {};

  useEffect(() => {
    // 매인 컴포넌트가 처음 랜더링 될 때, 데이터 받아오는 api 호출
  });
  return <MegazineGrid megazineData={results} />;
}
