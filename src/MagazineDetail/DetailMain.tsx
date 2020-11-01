import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { detailDummy } from "../Common/Dummy";
import { detailTypes } from "../Common/Interface";
import DetailHeader from "./DetailHeader";
import * as D from "./styles/DetailHeadStyles";
import DetailContent from "./DetailContent";
import { getMagazineDetailApi } from "../Api/magazine";

interface matchProps {
  id: string;
}

function MagazineDetailMain({ match }: RouteComponentProps<matchProps>) {
  const id = match.params.id;

  const [data, setData] = useState<detailTypes | null>(null);
  useEffect(() => {
    // (async () => {
    //   const result = await getMagazineDetailApi(Number(id));
    //   if (result.status === 200) {
    //     setData(result.data)
    //   }
    // })()
    setData(detailDummy);
  }, []);

  return (
    <>
      {data ? (
        <>
          {data.isVertical ? (
            <D.DetailWrap vertical={true}>
              <D.DetailBox>
                <DetailHeader data={data} />
                <DetailContent data={data} />
              </D.DetailBox>
            </D.DetailWrap>
          ) : (
            <D.DetailWrap vertical={false}>
              <D.DetailBox>
                <DetailHeader data={data} />
                <DetailContent data={data} />
              </D.DetailBox>
            </D.DetailWrap>
          )}
        </>
      ) : null}
    </>
  );
}

export default withRouter(MagazineDetailMain);
