import React, { useEffect, useState } from 'react';
import closeIcon from '../../Common/close.png';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const ModalPage = styled.div`
  position : fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width : 100vw;
  height: 100vh;
`
const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
`
const ModalBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`
const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #9e25fc;
  font-size: 30px;
`
const ModalContent = styled.div`
  position: relative; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: #6b6b6b;
  font-size: 16px;
`
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
`
const SearchInput = styled.input`
  height : 30px;
  width : 600px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #463333;
  border-radius: 0.3rem;
  text-indent: 0.8rem;
  &:hover{
    border-bottom-width: 3px;
  }
`

interface displayModalProps {
  title : string
  isOpen : boolean;
  onClose: () => void;
}

export const Search: React.FC <displayModalProps> = ({title, isOpen, onClose}) => 
{
  const overlayRef = React.useRef(null);
  const handleOverlayClick = (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
    if(e.target === overlayRef.current){
      onClose();
    }
  }
  const [startDate, setStartDate] = useState(new Date());
    
  const handleMenuClick = (e:any) => {
      message.info('Click on menu item.');
      console.log('click', e);
  }

  interface items {
    id:number,
    name:string
  }

  let temp:items[] = [];

  const [items, setItems] = useState(temp);
  

  // API가 완성되면 setItems를 axios를 이용해서 데이터 가공하기
  useEffect(() => {
    setItems([{id:1, name: '일상'},{id:2, name: '아이티'},{id:3, name: '여행'}]);
  }, [])

  // const menu = (
  //   <Menu style={{width:256}} mode={'vertical'} onClick={handleMenuClick}>
  //     <Menu.Item key="0">일상</Menu.Item>
  //     <Menu.Item key="1">IT</Menu.Item>
  //     <Menu.Item key="2">여행</Menu.Item>
  //   </Menu>
  // );

  return isOpen ? (
    <ModalPage>
      <ModalOverlay ref={overlayRef} onClick={handleOverlayClick}/>
      <ModalBox>
        <ModalCloseImg src={closeIcon} onClick={onClose}/>
        <ModalTitle>
          {title}
        </ModalTitle>
        <ModalContent>
          <SearchInput type="text" placeholder="제목을 입력해주세요" />
        </ModalContent>
          <ModalContent>
            <DatePicker 
              selected={startDate}
              onChange={(date:Date) => setStartDate(date)}
              dateFormat="MM/yyyy"
              showMonthYearPicker />
            <div>
              <Dropdown overlay={
                <Menu style={{width:256}} mode={'vertical'} onClick={handleMenuClick}>
                  {items.map((val) => {
                    return (<Menu.Item key={val.id} >{val.name}</Menu.Item>);
                  })}
                </Menu>
              } trigger={['click']}>
                <Button>
                  카테고리 <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          </ModalContent>
      </ModalBox>
    </ModalPage>
  ): null;
};