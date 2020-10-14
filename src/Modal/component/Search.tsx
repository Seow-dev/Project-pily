
import React, { useEffect, useState } from 'react';
import closeIcon from '../../Common/close.png';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { Select } from 'antd';

import 'react-datepicker/dist/react-datepicker.css';
import 'antd/dist/antd.css';
import { start } from 'repl';

interface displayModalProps {
  title : string
  isOpen : boolean;
  onClose: () => void;
}

// console.log(category, date, value) 찍히게끔
// useEffect로 조건에 맞게끔

export default function Search ({title, isOpen, onClose}:displayModalProps){

  interface items {
    id:number,
    name:string,
    value:string,
  }

  let temp:items[] = [];
  const [items, setItems] = useState(temp);
  const { Option } = Select;
  const [startDate, setStartDate] = useState(new Date());
  const [magazinetitle, setMagazineTitle] = useState("");
  const [category, setCategory] = useState("");

  //html event 

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setMagazineTitle(e.target.value);
  };
  const selectHandleChange = (e:string) =>{
    setCategory(e);
  }
  const datehandleChange = (e:Date) => {
    // time format 수정해야함 
    setStartDate(e)
  };

  console.log("Title :", magazinetitle, "Date :", startDate, "Category :", category);


  // API가 완성되면 setItems를 axios를 이용해서 데이터 가공하기
  useEffect(() => {
    setItems([
      {id:0, name: 'All', value: 'All'},
      {id:1, name: '일상', value: '일상'},
      {id:2, name: 'IT', value: 'IT'},
      {id:3, name: '여행', value: '여행'}
    ]);
  }, [])

  return isOpen ? (
    <ModalPage>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose}/>
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalContent>
          <SearchInput 
            placeholder="제목을 입력해주세요" 
            value={magazinetitle}
            onChange={handleChange}
          />
        </ModalContent>
        <ModalContent>
          <DatePicker 
            selected={startDate}
            onChange={datehandleChange}
            dateFormat="MMM/yyyy"
            showMonthYearPicker />
          <Select placeholder="카테고리를 선택하세요" defaultValue="All" onChange={selectHandleChange} style={{width:256}} allowClear>
            {items.map((val) => {
                  return (<Option key={val.id} value={val.value}>{val.name}</Option>);
            })}
          </Select>
          <button>
            검색
          </button>
        </ModalContent>
      </ModalBox>
    </ModalPage>
  ): null;
};



const ModalPage = styled.div`
  position : absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width : 100%;
  height: 100%;
  z-index:3;
`

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ModalBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`;
const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #9e25fc;
  font-size: 30px;
`;
const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: #6b6b6b;
  font-size: 16px;
`;
const ModalCloseImg = styled.img`
  position: absolute;
  top: 20px;
  right: 30px;
  width: 25px;
  height: 25px;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: rotate(180deg);
    cursor: pointer;
  }
`;
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



