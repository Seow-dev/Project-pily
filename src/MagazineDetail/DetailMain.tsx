import * as React from "react";
import { useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import Error from "../Modal/component/Error";
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
  const { success } = useSelector((state: RootState) => state.authReducer);
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
      {success && data ? (
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
      ) : (
        <Error />
      )}
    </>
  );
}

export default withRouter(MagazineDetailMain);
