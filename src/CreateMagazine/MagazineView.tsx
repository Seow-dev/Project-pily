import * as React from "react";
import { useState } from "react";
import {
  MagazineViewWrap,
  PublishButton,
  ButtonBar,
  HorizontalViewWrap,
  VirticalViewWrap,
  HorizontalArticle,
  VirticalArticle,
} from "./MagazineViewStyles";
import { IoIosRefresh } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";
import { MdPublish } from "react-icons/md";

export default function MagazineView() {
  const [virtical, setVirtical] = useState(false);
  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVirtical(prev => !prev);
  };
  return (
    <MagazineViewWrap>
      <ButtonBar>
        {virtical ? (
          <PublishButton onClick={handleView}>
            <IoIosRefresh style={{ fontSize: "0.8rem" }} /> 가로형 매거진
          </PublishButton>
        ) : (
          <PublishButton onClick={handleView}>
            <IoIosRefresh style={{ fontSize: "0.8rem" }} /> 세로형 매거진
          </PublishButton>
        )}
        <div>
          <PublishButton>
            <VscOpenPreview /> 미리보기
          </PublishButton>
          <PublishButton style={{ marginRight: 0 }}>
            <MdPublish /> 발행하기
          </PublishButton>
        </div>
      </ButtonBar>
      {virtical ? (
        <VirticalViewWrap>
          <VirticalArticle></VirticalArticle>
        </VirticalViewWrap>
      ) : (
        <HorizontalViewWrap>
          <HorizontalArticle></HorizontalArticle>
        </HorizontalViewWrap>
      )}
    </MagazineViewWrap>
  );
}
