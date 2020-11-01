import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { detailTypes } from "../Common/Interface";
import DetailHeader from "./DetailHeader";
import * as D from "./styles/DetailHeadStyles";
import DetailContent from "./DetailContent";
import { getMagazineDetailApi } from "../Api/magazine";

interface matchProps {
  id: string;
}

function MagazineDetailMain({
  match,
  history,
}: RouteComponentProps<matchProps>) {
  const id = match.params.id;

  const [data, setData] = useState<detailTypes | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const result = await getMagazineDetailApi(Number(id));
        if (result.status === 200) {
          setData(result.data);
        }
      } catch (err) {
        alert("작성되지 않은 매거진입니다.");
        history.push("/");
      }
    })();
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
