import * as React from "react";
import { useCallback, useState } from "react";
import MagazineView from "./MagazineView";
import FeedView from "./FeedView";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import Error from "../Modal/component/Error";
import { useSpring } from "react-spring";
import {
  FeedTypes,
  MagazineDataTypes,
  previewTypes,
} from "../Common/Interface";
import Preview from "./Preview";

const CreateMagazineMain = () => {
  const { success } = useSelector((state: RootState) => state.authReducer);

  // feed slide
  const [visible, setVisible] = useState(false);
  const slideMenuAnimation = useSpring({
    display: visible ? "block" : "none",
    transform: visible ? `translateX(0)` : `translateX(100%)`,
    position: "absolute",
    right: 0,
    zIndex: 10,
  });
  const handleSlide = useCallback(() => {
    setVisible(prev => !prev);
  }, [visible]);

  // magazine publish
  const [publishList, setPublishList] = useState<FeedTypes[]>([]);
  const handleWaitList = useCallback(
    (data: FeedTypes) => {
      const id = data.feedId;
      const check = publishList.filter(el => el.feedId === id);
      if (check.length !== 0) {
        setPublishList(publishList.filter(list => list.feedId !== id));
      } else {
        setPublishList(publishList.concat([data]));
      }
    },
    [publishList],
  );
  const handlePublish = (data: MagazineDataTypes) => {
    console.log(data);
  };

  const [isPreviewModalOpen, setPreviewModalState] = useState(false);
  const previewToggleModal = () => setPreviewModalState(!isPreviewModalOpen);
  const [feedData, setFeedData] = useState({
    title: "",
    feedBody: "",
  });
  const getFeedData = (data: any) => {
    const feedTitle = data.title;
    const feedContent = data.content;
    setFeedData({
      title: feedTitle,
      feedBody: feedContent,
    });
  };

  const [showPreview, setShowPreview] = useState(true);
  const [previewData, setPreviewData] = useState<previewTypes | null>(null);
  const handlePreview = (data: previewTypes) => {
    if (data) {
      setPreviewData(data);
      setShowPreview(!showPreview);
    }
  };

  return (
    <>
      {success ? (
        <>
          <Wrapper>
            <Container>
              <MagazineView
                preview={handlePreview}
                publish={handlePublish}
                waitList={publishList}
                open={handleSlide}
                gotFeedTitle={feedData.title}
                gotFeedBody={feedData.feedBody}
                isPreviewOpen={isPreviewModalOpen}
                onClosePreview={previewToggleModal}
              />
              <FeedView
                setWaitList={handleWaitList}
                waitList={publishList}
                styles={slideMenuAnimation}
                close={handleSlide}
                getFeedData={getFeedData}
                onActivePreview={previewToggleModal}
              />
            </Container>
          </Wrapper>
          {previewData && (
            <Preview
              previewData={previewData}
              isPreview={showPreview}
              close={() => setShowPreview(false)}
            />
          )}
        </>
      ) : (
        <Error />
      )}
    </>
  );
};
export default React.memo(CreateMagazineMain);

const Wrapper = styled.section`
  width: 95%;
  min-height: 1000px;
  margin: 50px auto;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;
const Container = styled.section`
  width: 100%;
  min-height: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  column-gap: 2rem;
`;
