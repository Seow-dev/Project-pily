import React, { useEffect, useState } from "react";
import closeIcon from "../../Common/close.png";
import styled from "styled-components";
import {
  ModalPage,
  ModalBox,
  ModalTitle,
  ModalContent,
  ModalCloseImg,
} from "./ModalStyles";
import DatePicker from "react-datepicker";
import { Select } from "antd";

import "react-datepicker/dist/react-datepicker.css";
import "antd/dist/antd.css";
import { results } from "../../Common/SearchDummy";
import { displayModalProps } from "../../Common/Interface";

// console.log(category, date, value) 찍히게끔
// useEffect로 조건에 맞게끔

export default function Search({ title, isOpen, onClose }: displayModalProps) {
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
  function date_to_str(format: Date) {
    let tmpMonth = "";
    var year = format.getFullYear().toString();
    var month = format.getMonth() + 1;
    if (month < 10) {
      tmpMonth = "0" + month.toString();
    } else {
      tmpMonth = month.toString();
    }
    return year + "-" + tmpMonth;
  }

  const datehandleChange = (e: Date) => {
    setFormState({
      ...formState,
      searchDate: e,
    });
  };

  console.log(
    "Title :",
    formState.searchTitle,
    "Date :",
    date_to_str(formState.searchDate),
    "Category :",
    formState.searchCategory,
    "IsOpen",
    isOpen,
  );

  const submitHandler = () => {
    console.log(results);
    // console.log(date_to_str(formState.searchDate)); // fotmatting 된 Date 벨류
    if (formState.searchCategory) {
      const tmp = results.filter(e =>
        e.category?.includes(formState.searchCategory),
      );

      console.log(tmp);
    }
    if (formState.searchTitle) {
      const tmpTitle = results.filter(e =>
        e.category?.includes(formState.searchTitle),
      );

      console.log(tmpTitle);
    }
    if (formState.searchDate) {
      const tmpDate = results.filter(e =>
        e.category?.includes(date_to_str(formState.searchDate)),
      );

      console.log(tmpDate);
    }
    // onClose();
  };

  // API가 완성되면 setItems를 axios를 이용해서 데이터 가공하기 (카테고리 종류)
  useEffect(() => {
    setItems([
      { id: 0, name: "All", value: "All" },
      { id: 1, name: "일상", value: "일상" },
      { id: 2, name: "IT", value: "IT" },
      { id: 3, name: "여행", value: "여행" },
    ]);
  }, []);

  return isOpen ? (
    <ModalPage>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose} />
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>
          <SearchInput
            id="searchTitle"
            placeholder="제목을 입력해주세요"
            value={formState.searchTitle}
            onChange={handleChange}
          />
        </ModalContent>
        <ModalContent>
          <DatePicker
            selected={formState.searchDate}
            onChange={datehandleChange}
            dateFormat="MMM/yyyy"
            showMonthYearPicker
          />
          <Select
            placeholder="카테고리를 선택하세요"
            onChange={selectHandleChange}
            style={{ width: 256 }}
            allowClear
          >
            {items.map(val => {
              return (
                <Option id="category" key={val.id} value={val.value}>
                  {val.name}
                </Option>
              );
            })}
          </Select>
          <button type="submit" onClick={submitHandler}>
            검색
          </button>
        </ModalContent>
      </ModalBox>
    </ModalPage>
  ) : null;
}

const SearchInput = styled.input`
  height: 30px;
  width: 600px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #463333;
  border-radius: 0.3rem;
  text-indent: 0.8rem;
  &:hover {
    border-bottom-width: 3px;
  }
`;
