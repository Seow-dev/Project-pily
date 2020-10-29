import React, { useEffect, useState } from "react";
import closeIcon from "../../Common/close.png";
import styled from "styled-components";

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
} from "./ModalStyles";
import DatePicker from "react-datepicker";
import { Select } from "antd";

import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import { results } from "../../Common/SearchDummy";
import { displayModalProps } from "../../Common/Interface";
import { searchApi } from "../../Api/search";
import { url } from "inspector";

// console.log(category, date, value) 찍히게끔
// useEffect로 조건에 맞게끔

export default function Search({ title, onClose }: displayModalProps) : JSX.Element{
  // Category Items Interface

  interface items {
    id: number;
    name: string;
    value: string;
  }

  let temp: items[] = [];
  const [items, setItems] = useState(temp);
  const { Option } = Select;
  const [formState, setFormState] = useState({
    searchTitle: "",
    searchDate: new Date(),
    searchCategory: "",
  });
  const [disablePicker, setDisablePicker] = useState(false);
  const diasbleHandler = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) =>{
    setDisablePicker(
      e.currentTarget.checked
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setMagazineTitle(e.target.value);
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const selectHandleChange = (e: string) => {
    setFormState({
      ...formState,
      searchCategory: e,
    });
  };

  // 2020-09 와 같이 포맷팅
  function date_to_str(format: Date) : string {
    let tmpMonth = "";
    var year = format.getFullYear().toString();
    var month = format.getMonth() + 1;
    if (month < 10) {
      tmpMonth = "0" + month.toString();
    } else {
      tmpMonth = month.toString();
    }
    return disablePicker ? "" : (year + "-" + tmpMonth) ;
  }

  const datehandleChange = (e: Date) => {
    setFormState({
      ...formState,
      searchDate: e,
    });
  };

  const submitHandler = () => {
    // console.log(date_to_str(formState.searchDate)); // fotmatting 된 Date 벨류

    searchApi(formState.searchTitle, date_to_str(formState.searchDate), formState.searchCategory);
    console.log(
      "Title :",
        formState.searchTitle,
      "Date :",
        date_to_str(formState.searchDate),
      "Category :",
        formState.searchCategory    
    );
    // onClose();
  };

  // API가 완성되면 setItems를 axios를 이용해서 데이터 가공하기 (카테고리 종류)
  // 기본 값을 All로 지정하고 쿼리문에서 빈 값을 검색하게 되면 모든 데이터를 타겟지정
  useEffect(() => {
    setItems([
      { id: 0, name: "All", value: "All" },
      { id: 1, name: "일상", value: "일상" },
      { id: 2, name: "IT", value: "IT" },
      { id: 3, name: "여행", value: "여행" },
    ]);
  }, []);

  return (
    <ModalPage>
      <ModalSearchBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        {/* <ModalTitle>{title}</ModalTitle> */}
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
              <input id="selectDate" type="checkbox"  onClick={diasbleHandler}/>
              <label htmlFor="selectDate"></label>
          </ModalSearchDateSelector>
          <ModalSearchOptions dis={disablePicker}>
            <DatePicker
              className="picker"
              selected={formState.searchDate}
              onChange={datehandleChange}
              dateFormat="MMM/yyyy"
              showMonthYearPicker
              disabled={disablePicker}
              />
            <Select
              className="calendar"
              placeholder="카테고리를 선택하세요"
              onChange={selectHandleChange}
              style={SelectStyle}
              bordered={false}
              allowClear
              defaultValue="All"
              >
              {items.map(val => {
                return (
                  <Option id="category" key={val.id} value={val.value}>
                    {val.name}
                  </Option>
                );
              })}
            </Select>
          </ModalSearchOptions>
        </ModalSearchWrapper>
          <SearchBtn type="submit" onClick={submitHandler}>
            검색
          </SearchBtn>
      </ModalSearchBox>
    </ModalPage>
  )
}


const SelectStyle={
  width:"250px",
  marginLeft:"2rem",
  color: "black",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderBottom: "2px solid black",
  fontSize: "20px",
}