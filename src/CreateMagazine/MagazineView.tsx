import * as React from "react";
import { useState, useRef, useEffect } from "react";
import * as M from "./styles/MagazineViewStyles";
import { IoIosRefresh } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";
import { MdPublish, MdSearch } from "react-icons/md";
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from "react-icons/bi";
import { RadioChangeEvent } from "antd/lib/radio";
import { generateItems } from "./GenerateItems";
import {
  FeedTypes,
  MagazineDataTypes,
  previewTypes,
} from "../Common/Interface";
import "react-quill/dist/quill.snow.css";
import { PreviewMagazineModal } from "../Modal/component/Preview";
import { thumbnailUploadApi } from "../Api/magazine";

interface props {
  waitList: FeedTypes[];
  gotFeedTitle: string;
  gotFeedBody: string;
  isPreviewOpen: boolean;
  open: () => void;
  onClosePreview: () => void;
  preview: (data: previewTypes) => void;
  publish: (data: MagazineDataTypes) => void;
}

export default function MagazineView({
  open,
  waitList,
  gotFeedTitle,
  gotFeedBody,
  publish,
  isPreviewOpen,
  onClosePreview,
  preview,
}: props) {
  const [vertical, setVertical] = useState(false);
  const [grid, setGrid] = useState(1);
  const [titleAlign, setTitleAlign] = useState(2);
  const handleView = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVertical(prev => !prev);
    setGrid(1);
  };

  const [option, setOption] = useState({
    magazineTitle: "",
    magazineSubTitle: "",
  });
  const handleOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOption(prev => ({ ...prev, [name]: value }));
  };

  const [thumbnail, setThumbnail] = useState({
    url: "",
    name: "",
  });
  const thumbnailRef = useRef<HTMLInputElement>(null);
  const handleThumb = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files) {
      const form = new FormData();
      form.append("img", files[0]);

      try {
        const result = await thumbnailUploadApi(form);
        if (result.status === 200) {
          setThumbnail(prev => ({
            ...prev,
            url: result.data.location,
            name: files[0].name,
          }));
        }
      } catch (err) {
        console.log("error");
      }
    }
  };

  const handlePublish = () => {
    const datas: MagazineDataTypes = {
      isVertical: vertical,
      grid,
      titleAlign,
      title: option.magazineTitle,
      subTitle: option.magazineSubTitle,
      thumbnail: thumbnail.url,
      feedList: waitList.map(item => item.id),
    };

    if (
      datas.title &&
      datas.feedList.length !== 0 &&
      datas.grid &&
      datas.titleAlign
    ) {
      publish(datas);
    } else {
      alert("매거진 정보를 다 입력해주세요.");
    }
  };

  const handlePreivew = () => {
    const data: previewTypes = {
      thumbnail: thumbnail.url,
      title: option.magazineTitle,
      subTitle: option.magazineSubTitle,
      feedList: waitList,
      grid,
      titleAlign,
      isVertical: vertical,
    };
    preview(data);
  };

  return (
    <M.MagazineViewWrap>
      {isPreviewOpen ? (
        <PreviewMagazineModal
          title={gotFeedTitle}
          content={gotFeedBody}
          onClose={onClosePreview}
        />
      ) : null}
      <M.ButtonBar>
        <M.PublishButton onClick={handleView}>
          <IoIosRefresh style={{ fontSize: "0.8rem" }} />
          {vertical ? "가로형 매거진" : "세로형 매거진"}
        </M.PublishButton>
        <div>
          <M.PublishButton onClick={handlePreivew}>
            <VscOpenPreview /> 미리보기
          </M.PublishButton>
          <M.PublishButton onClick={handlePublish}>
            <MdPublish /> 발행하기
          </M.PublishButton>
          <M.PublishButton onClick={open} style={{ marginRight: 0 }}>
            <MdSearch /> 피드 찾기
          </M.PublishButton>
        </div>
      </M.ButtonBar>
      <M.PublishOption>
        <M.OptionHalf>
          <M.OptionItem>
            <h3>매거진 그리드 선택</h3>
            {!vertical && (
              <M.StyledRadio.Group
                value={grid}
                onChange={(e: RadioChangeEvent) => setGrid(e.target.value)}
              >
                <M.StyledRadio.Button value={1}>1단</M.StyledRadio.Button>
                <M.StyledRadio.Button value={2}>2단</M.StyledRadio.Button>
                <M.StyledRadio.Button value={3}>3단</M.StyledRadio.Button>
              </M.StyledRadio.Group>
            )}
            {vertical && (
              <M.StyledRadio.Group
                value={grid}
                onChange={(e: RadioChangeEvent) => setGrid(e.target.value)}
              >
                <M.StyledRadio.Button value={1}>1단</M.StyledRadio.Button>
                <M.StyledRadio.Button value={2}>2단</M.StyledRadio.Button>
              </M.StyledRadio.Group>
            )}
          </M.OptionItem>
          <M.OptionItem>
            <h3>매거진 타이틀 정렬</h3>
            <M.StyledRadio.Group
              value={titleAlign}
              onChange={(e: RadioChangeEvent) => setTitleAlign(e.target.value)}
            >
              <M.StyledRadio.Button value={1}>
                <BiAlignLeft />
              </M.StyledRadio.Button>
              <M.StyledRadio.Button value={2}>
                <BiAlignMiddle />
              </M.StyledRadio.Button>
              <M.StyledRadio.Button value={3}>
                <BiAlignRight />
              </M.StyledRadio.Button>
            </M.StyledRadio.Group>
          </M.OptionItem>
        </M.OptionHalf>
        <M.OptionHalf>
          <M.OptionItem>
            <h3>매거진 제목</h3>
            <M.MagazineOptionInput
              name="magazineTitle"
              value={option.magazineTitle}
              onChange={handleOption}
            />
          </M.OptionItem>
          <M.OptionItem>
            <h3>매거진 소제목</h3>
            <M.MagazineOptionInput
              name="magazineSubTitle"
              value={option.magazineSubTitle}
              onChange={handleOption}
            />
          </M.OptionItem>
          <M.OptionItem>
            <h3>매거진 썸네일 업로드</h3>
            <M.Uploadbox>
              <M.UploadButton onClick={() => thumbnailRef.current?.click()}>
                업로드
              </M.UploadButton>
              <input
                ref={thumbnailRef}
                name="thumbnail"
                onChange={handleThumb}
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
              />
              <M.UploadName>{thumbnail.name}</M.UploadName>
            </M.Uploadbox>
          </M.OptionItem>
        </M.OptionHalf>
      </M.PublishOption>
      {!vertical && (
        <M.HorizontalViewWrap align={titleAlign}>
          <M.MagazineTitleArea align={titleAlign}>
            <h1>{option.magazineTitle}</h1>
            <h5>{option.magazineSubTitle}</h5>
          </M.MagazineTitleArea>
          <M.HorizontalArticle>
            {generateItems(grid, waitList)}
          </M.HorizontalArticle>
        </M.HorizontalViewWrap>
      )}
      {vertical && (
        <M.VirticalViewWrap align={titleAlign}>
          <M.MagazineTitleArea align={titleAlign}>
            <h1>{option.magazineTitle}</h1>
            <h5>{option.magazineSubTitle}</h5>
          </M.MagazineTitleArea>
          <M.VirticalArticle>{generateItems(grid, waitList)}</M.VirticalArticle>
        </M.VirticalViewWrap>
      )}
    </M.MagazineViewWrap>
  );
}
