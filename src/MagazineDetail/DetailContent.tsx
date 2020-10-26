import React from "react";
import { detailTypes, previewTypes } from "../Common/Interface";
import { generateItems } from "../CreateMagazine/GenerateItems";
import * as H from "../CreateMagazine/styles/MagazineViewStyles";

interface props {
  data: detailTypes | previewTypes;
}

export default function DetailContent({ data }: props) {
  return (
    <>
      {!data.isVertical && (
        <H.HorizontalViewWrap
          style={{ marginTop: 0, boxShadow: "#ced4da 0 1px 4px" }}
          align={data.titleAlign}
        >
          <H.HorizontalArticle style={{ border: "none", padding: "1rem" }}>
            {generateItems(data.grid, data.feedList)}
          </H.HorizontalArticle>
        </H.HorizontalViewWrap>
      )}
      {data.isVertical && (
        <H.VirticalViewWrap
          style={{ marginTop: 0, boxShadow: "#ced4da 0 1px 4px" }}
          align={data.titleAlign}
        >
          <H.VirticalArticle style={{ border: "none" }}>
            {generateItems(data.grid, data.feedList)}
          </H.VirticalArticle>
        </H.VirticalViewWrap>
      )}
    </>
  );
}
