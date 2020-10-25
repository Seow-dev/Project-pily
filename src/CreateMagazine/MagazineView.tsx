import * as React from "react";
import { useState, useRef } from "react";
import {
  MagazineViewWrap,
  PublishButton,
  ButtonBar,
  HorizontalViewWrap,
  VirticalViewWrap,
  HorizontalArticle,
  VirticalArticle,
  PublishOption,
  OptionItem,
  StyledRadio,
  MagazineOptionInput,
  MagazineTitleArea,
  Uploadbox,
  UploadButton,
  UploadName,
} from "./MagazineViewStyles";
import { IoIosRefresh } from "react-icons/io";
import { VscOpenPreview } from "react-icons/vsc";
import { MdPublish, MdSearch } from "react-icons/md";
import { BiAlignLeft, BiAlignMiddle, BiAlignRight } from "react-icons/bi";
import { RadioChangeEvent } from "antd/lib/radio";
import { generateItems } from "./GenerateItems";
import { FeedTypes, MagazineDataTypes } from "../Common/Interface";
import "react-quill/dist/quill.snow.css";
import { PreviewMagazineModal } from "../Modal/component/Preview";


interface props {
  waitList: FeedTypes[];
  gotFeedTitle: string;
  gotFeedBody: string;
  open: () => void;
  publish: (data: MagazineDataTypes) => void;
  isPreviewOpen: boolean;
  onClosePreview: () => void;
}

export default function MagazineView({ open, waitList, gotFeedTitle, gotFeedBody, publish, isPreviewOpen, onClosePreview }: props) {
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
      form.append("thumbnail", files[0]);
      // api call
      // const res = await postThumbnailApi()
      for (let prop of form) {
        console.log(prop);
      }
      setThumbnail(prev => ({
        ...prev,
        url:
          "https://img2.sbs.co.kr/img/sbs_cms/CH/2017/04/28/CH33108141_w666_h968.jpg",
        name: files[0].name,
      }));
    }
  };

  const handlePublish = () => {
    const datas: MagazineDataTypes = {
      isVertical: vertical,
      grid,
      titleAlign,
      magazineTitle: option.magazineTitle,
      magazineSubTitle: option.magazineSubTitle,
      thumbnail: thumbnail.url,
      feedList: waitList.map(item => item.feedId),
    };
    publish(datas);
  };

  return (
    <MagazineViewWrap>
      <PreviewMagazineModal 
        title={gotFeedTitle}
        content={gotFeedBody}
        isOpen={isPreviewOpen}
        onClose={onClosePreview}
      />
      <ButtonBar>
        {vertical ? (
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
          <PublishButton onClick={handlePublish}>
            <MdPublish /> 발행하기
          </PublishButton>
          <PublishButton onClick={open} style={{ marginRight: 0 }}>
            <MdSearch /> 피드 찾기
          </PublishButton>
        </div>
      </ButtonBar>
      <PublishOption>
        <OptionItem>
          <h3>매거진 그리드 선택</h3>
          {!vertical && (
            <StyledRadio.Group
              value={grid}
              onChange={(e: RadioChangeEvent) => setGrid(e.target.value)}
            >
              <StyledRadio.Button value={1}>1단</StyledRadio.Button>
              <StyledRadio.Button value={2}>2단</StyledRadio.Button>
              <StyledRadio.Button value={3}>3단</StyledRadio.Button>
            </StyledRadio.Group>
          )}
          {vertical && (
            <StyledRadio.Group
              value={grid}
              onChange={(e: RadioChangeEvent) => setGrid(e.target.value)}
            >
              <StyledRadio.Button value={1}>1단</StyledRadio.Button>
              <StyledRadio.Button value={2}>2단</StyledRadio.Button>
            </StyledRadio.Group>
          )}
        </OptionItem>
        <OptionItem>
          <h3>매거진 타이틀 정렬</h3>
          <StyledRadio.Group
            value={titleAlign}
            onChange={(e: RadioChangeEvent) => setTitleAlign(e.target.value)}
          >
            <StyledRadio.Button value={1}>
              <BiAlignLeft />
            </StyledRadio.Button>
            <StyledRadio.Button value={2}>
              <BiAlignMiddle />
            </StyledRadio.Button>
            <StyledRadio.Button value={3}>
              <BiAlignRight />
            </StyledRadio.Button>
          </StyledRadio.Group>
        </OptionItem>
        <OptionItem>
          <h3>매거진 제목</h3>
          <MagazineOptionInput
            name="magazineTitle"
            value={option.magazineTitle}
            onChange={handleOption}
          />
        </OptionItem>
        <OptionItem>
          <h3>매거진 소제목</h3>
          <MagazineOptionInput
            name="magazineSubTitle"
            value={option.magazineSubTitle}
            onChange={handleOption}
          />
        </OptionItem>
        <OptionItem>
          <h3>매거진 썸네일 업로드</h3>
          <Uploadbox>
            <UploadButton onClick={() => thumbnailRef.current?.click()}>
              업로드
            </UploadButton>
            <input
              ref={thumbnailRef}
              name="thumbnail"
              onChange={handleThumb}
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
            />
            <UploadName>{thumbnail.name}</UploadName>
          </Uploadbox>
        </OptionItem>
      </PublishOption>
      {!vertical && (
        <HorizontalViewWrap align={titleAlign}>
          <MagazineTitleArea align={titleAlign}>
            <h1>{option.magazineTitle}</h1>
            <h5>{option.magazineSubTitle}</h5>
          </MagazineTitleArea>
          <HorizontalArticle>{generateItems(grid, waitList)}</HorizontalArticle>
        </HorizontalViewWrap>
      )}
      {vertical && (
        <VirticalViewWrap align={titleAlign}>
          <MagazineTitleArea align={titleAlign}>
            <h1>{option.magazineTitle}</h1>
            <h5>{option.magazineSubTitle}</h5>
          </MagazineTitleArea>
          <VirticalArticle>{generateItems(grid, waitList)}</VirticalArticle>
        </VirticalViewWrap>
      )}
    </MagazineViewWrap>
  );
}
