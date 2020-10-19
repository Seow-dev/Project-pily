import * as React from "react";
import { useState } from "react";
import {
  FeedViewWrap,
  ControllerBox,
  Label,
  SearchBox,
  SelectBox,
  StyledDatePicker,
  FeedContainer,
  Feed,
} from "./FeedViewStyles";
import { FeedTypes } from "../Common/Interface";

interface OptionProps {
  query: string;
  date: { Moment: moment.Moment | null; dateString: string };
}
interface props {
  feedData: FeedTypes[];
}

export default function FeedView({ feedData }: props) {
  const [option, setOption] = useState<OptionProps>({
    query: "",
    date: { Moment: null, dateString: "" },
  });
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setOption(prev => ({ ...prev, query: value }));
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(option);
    setOption(prev => ({
      ...prev,
      query: "",
      date: { Moment: null, dateString: "" },
    }));
  };

  const [active, setActive] = useState<string[]>([]);
  const handleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    if (active.includes(id)) {
      setActive(active.filter(el => el !== id));
    } else {
      setActive(active.concat([id]));
    }
  };

  return (
    <FeedViewWrap>
      <ControllerBox>
        <Label>피드를 조회하세요</Label>
        {option.query.length > 1 ? (
          <SearchBox on={1}>
            <input
              value={option.query}
              onChange={handleSearch}
              placeholder="피드를 검색해주세요"
            />
            <button onClick={handleSubmit}>검색</button>
          </SearchBox>
        ) : (
          <SearchBox on={0}>
            <input
              value={option.query}
              onChange={handleSearch}
              placeholder="피드를 검색해주세요"
            />
            <button onClick={handleSubmit}>검색</button>
          </SearchBox>
        )}

        <SelectBox>
          <StyledDatePicker
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
        </SelectBox>
      </ControllerBox>
      <Label style={{ marginTop: "2rem" }}>피드 목록</Label>
      <FeedContainer>
        {feedData.map(result => {
          if (active.includes(result.feedId.toString())) {
            return (
              <Feed
                key={result.feedId}
                id={result.feedId.toString()}
                onClick={handleActive}
                active={1}
              >
                <h2>{result.title}</h2>
                <p>{result.createdAt}</p>
              </Feed>
            );
          } else {
            return (
              <Feed
                key={result.feedId}
                id={result.feedId.toString()}
                onClick={handleActive}
                active={0}
              >
                <h2>{result.title}</h2>
                <p>{result.createdAt}</p>
              </Feed>
            );
          }
        })}
      </FeedContainer>
    </FeedViewWrap>
  );
}
