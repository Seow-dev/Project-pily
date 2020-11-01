import React, { useEffect, useState } from "react";
import closeIcon from "../../Common/close.png";

import {
  ModalPage,
  ModalSearchBox,
  ModalSearchContent,
  ModalCloseImg,
  SearchInput,
  ModalSearchOptions,
  ModalSearchDateSelector,
  SearchBtn,
  ModalSearchWrapper,
  SearchB1,
  SearchB2,
  SearchParagraph,
  StyledDatePicker,
  StyeldSelect,
} from "./ModalStyles";
import { Select } from "antd";
import {
  displayModalProps,
  DataTypes,
  categoryTypes,
  searchDateProps,
} from "../../Common/Interface";
import { searchApi } from "../../Api/search";
import { CATEGORY } from "../../Common/Dummy";
import { SelectValue } from "antd/lib/select";
import "antd/dist/antd.css";

interface SearchData extends displayModalProps {
  getSearchData: (data: DataTypes[]) => void;
}

export default function Search({
  getSearchData,
  onClose,
}: SearchData): JSX.Element {
  // Category Items Interface

  const { Option } = Select;
  const [formState, setFormState] = useState({
    searchTitle: "",
  });
  const [date, setDate] = useState<searchDateProps>({
    Moment: null,
    dateString: "",
  });

  const [disablePicker, setDisablePicker] = useState(false);
  const diasbleHandler = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    setDisablePicker(e.currentTarget.checked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const [category, setCategory] = useState<categoryTypes[]>([]);
  const [cur, setCur] = useState(0);
  useEffect(() => {
    setCategory(CATEGORY);
  }, []);

  const submitHandler = async () => {
    const result = await searchApi(formState.searchTitle, date.dateString, cur);
    getSearchData(result.data.results as DataTypes[]);
    // onClose();
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
          <ModalSearchDateSelector>
            <span>모든 날짜선택</span>
            <input id="selectDate" type="checkbox" onClick={diasbleHandler} />
            <label htmlFor="selectDate"></label>
          </ModalSearchDateSelector>
          <ModalSearchOptions dis={disablePicker}>
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
              disabled={disablePicker}
            />
            <StyeldSelect
              placeholder="카테고리를 선택하세요"
              onChange={(value: SelectValue) => setCur(Number(value))}
              bordered={false}
              allowClear
              defaultValue="All"
            >
              {category.map((val: categoryTypes) => {
                return (
                  <Option id="category" key={val.id} value={val.id}>
                    {val.name}
                  </Option>
                );
              })}
            </StyeldSelect>
            <SearchBtn type="submit" onClick={submitHandler}>
              검색
            </SearchBtn>
          </ModalSearchOptions>
        </ModalSearchWrapper>
      </ModalSearchBox>
    </ModalPage>
  );
}