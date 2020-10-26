import * as React from "react";
import { useState } from "react";
import * as FeedStyles from "./styles/FeedViewStyles";
import { FeedTypes, OptionProps } from "../Common/Interface";
import { animated } from "react-spring";
import { GrFormClose } from "react-icons/gr";
import { feedResult, result } from "../Common/Dummy";
import "react-quill/dist/quill.snow.css";

interface props {
  styles: any;
  waitList: FeedTypes[];
  setWaitList: (data: FeedTypes) => void;
  close: () => void;
  onActivePreview: () => void;
  getFeedData: (data: FeedTypes) => void;
}

function FeedView({
  styles,
  close,
  waitList,
  setWaitList,
  onActivePreview,
  getFeedData,
}: props) {
  const [option, setOption] = useState<OptionProps>({
    query: "",
    date: { Moment: null, dateString: "" },
  });
  const [feedData, setFeedData] = useState<FeedTypes[]>([]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOption(prev => ({ ...prev, query: value }));
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // option을 이용해서 검색이 넘어온 데이터를 여기서 처리.
    if (option.date.dateString.length === 0 && option.query.length === 0) {
      alert("피드를 검색하거나 생성일을 조회해주세요.");
    } else {
      const data = feedResult.filter(
        el =>
          el.createdAt === option.date.dateString ||
          el.title.includes(option.query),
      );
      setFeedData(data);
      setOption(prev => ({
        ...prev,
        query: "",
        date: { Moment: null, dateString: "" },
      }));
    }
  };

  return (
    <animated.div style={styles}>
      <FeedStyles.FeedViewWrap>
        <FeedStyles.CloseButton onClick={close}>
          <GrFormClose />
        </FeedStyles.CloseButton>
        <FeedStyles.ControllerBox>
          <FeedStyles.Label>피드를 조회하세요</FeedStyles.Label>
          {option.query.length > 0 ? (
            <FeedStyles.SearchBox on={1}>
              <input
                value={option.query}
                onChange={handleSearch}
                placeholder="피드를 검색해주세요"
              />
              <button onClick={handleSubmit}>검색</button>
            </FeedStyles.SearchBox>
          ) : (
            <FeedStyles.SearchBox on={0}>
              <input
                value={option.query}
                onChange={handleSearch}
                placeholder="피드를 검색해주세요"
              />
              <button onClick={handleSubmit}>검색</button>
            </FeedStyles.SearchBox>
          )}

          <FeedStyles.SelectBox>
            <FeedStyles.StyledDatePicker
              value={option.date.Moment}
              onChange={(date, dateString) => {
                setOption({
                  ...option,
                  date: { Moment: date, dateString },
                });
              }}
              placeholder="조회할 월을 선택하세요."
              picker="month"
            />
          </FeedStyles.SelectBox>
        </FeedStyles.ControllerBox>
        <FeedStyles.Label style={{ marginTop: "2rem" }}>
          피드 목록
        </FeedStyles.Label>
        <FeedStyles.FeedContainer>
          {feedData.map(result => {
            const check = waitList.filter(el => el.feedId === result.feedId);
            if (check.length !== 0) {
              return (
                <div key={result.feedId}>
                  <FeedStyles.StyledSearchOutlined
                    onClick={() => {
                      onActivePreview();
                      getFeedData(result);
                    }}
                  />
                  <FeedStyles.Feed
                    // key={result.feedId}
                    id={result.feedId.toString()}
                    onClick={() => setWaitList(result)}
                    active={1}
                  >
                    <h2>{result.title}</h2>
                    <p className="createAtOn">{result.createdAt}</p>
                  </FeedStyles.Feed>
                </div>
              );
            } else {
              return (
                <div key={result.feedId}>
                  <FeedStyles.StyledSearchOutlined
                    onClick={() => {
                      onActivePreview();
                      getFeedData(result);
                    }}
                    style={{
                      position: "relative",
                      top: "30px",
                      left: "150px",
                      fontSize: "20px",
                      border: "1px solid black",
                      borderRadius: "5px",
                      backgroundColor: "white",
                    }}
                  />
                  <FeedStyles.Feed
                    // key={result.feedId}
                    id={result.feedId.toString()}
                    onClick={() => setWaitList(result)}
                    active={0}
                  >
                    <h2>{result.title}</h2>
                    <p className="createAtOff">{result.createdAt}</p>
                  </FeedStyles.Feed>
                </div>
              );
            }
          })}
        </FeedStyles.FeedContainer>
      </FeedStyles.FeedViewWrap>
    </animated.div>
  );
}

export default React.memo(FeedView);
