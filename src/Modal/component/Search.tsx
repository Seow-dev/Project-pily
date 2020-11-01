import React, { useEffect, useState } from "react";
import closeIcon from "../../Common/close.png";

import {
  ModalPage,
  ModalSearchBox,
  ModalSearchContent,
  ModalCloseImg,
  SearchInput,
  ModalSearchOptions,
  SearchBtn,
  ModalSearchWrapper,
  SearchB1,
  SearchB2,
  SearchParagraph,
  StyledDatePicker,
} from "./ModalStyles";
import {
  displayModalProps,
  DataTypes,
  searchDateProps,
} from "../../Common/Interface";
import { searchApi } from "../../Api/search";
import "antd/dist/antd.css";

interface SearchData extends displayModalProps {
  getSearchData: (data: DataTypes[]) => void;
}

export default function Search({
  getSearchData,
  onClose,
}: SearchData): JSX.Element {
  const [formState, setFormState] = useState({
    searchTitle: "",
  });
  const [date, setDate] = useState<searchDateProps>({
    Moment: null,
    dateString: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = async () => {
    const result = await searchApi(20, formState.searchTitle, date.dateString);
    getSearchData(result.data.results as DataTypes[]);
    onClose();
  };

  return (
    <ModalPage>
      <ModalSearchBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <SearchParagraph>
          당신의 일상을
          <SearchB1> 발행</SearchB1>하다.
          <SearchB2>PILY</SearchB2>
        </SearchParagraph>
        <ModalSearchContent>
          <SearchInput
            id="searchTitle"
            placeholder="검색어를 입력해주세요"
            value={formState.searchTitle}
            onChange={handleChange}
          />
        </ModalSearchContent>
        <ModalSearchWrapper>
          <ModalSearchOptions>
            <StyledDatePicker
              value={date.Moment}
              onChange={(date, string) => {
                setDate({
                  ...date,
                  Moment: date,
                  dateString: `${Number(
                    date?.startOf("month").toDate(),
                  )},${Number(date?.endOf("month").toDate())}`,
                });
              }}
              placeholder="조회할 월을 선택하세요."
              picker="month"
              format="YYYY-MM"
            />
            <SearchBtn type="submit" onClick={submitHandler}>
              검색
            </SearchBtn>
          </ModalSearchOptions>
        </ModalSearchWrapper>
      </ModalSearchBox>
    </ModalPage>
  );
}
