import React, { useCallback, useState } from "react";
import MagazineView from "./MagazineView";
import FeedView from "./FeedView";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../Modules";
import Error from "../Modal/component/Error";
import { useSpring } from "react-spring";
import { FeedTypes, MagazineDataTypes } from "../Common/Interface";

const CreateMagazineMain = () => {
  const { success } = useSelector((state: RootState) => state.authReducer);

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

  return (
    <>
      {success ? (
        <Wrapper>
          <Container>
            <MagazineView
              publish={handlePublish}
              waitList={publishList}
              open={handleSlide}
            />
            <FeedView
              setWaitList={handleWaitList}
              waitList={publishList}
              styles={slideMenuAnimation}
              close={handleSlide}
            />
          </Container>
        </Wrapper>
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
