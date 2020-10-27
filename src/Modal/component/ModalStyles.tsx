import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";

/*
  0a. General Modal
  1a. Search Modal Page
  2a. Social Login Page
  3a. Magazine FeedPreview
  4a. Preivew on MyPage
  5a. ActionBtn

*/

// 0a. General Modal

export const LoginModal = styled.a`
  position: absolute;
  top: 21px;
  right: 65px;
  fontsize: 15px;
  &:hover {
    color: #ff0000;
  }
`;

export const ModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalBox = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  cursor: auto;
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #9e25fc;
  font-size: 30px;
  word-break: break-all;
  // overflow:hidden;
  // text-overflow:ellipsis;
`;
export const ModalCloseImg = styled.img`
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
export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  color: #6b6b6b;
  word-break: break-all;
  font-size: 16px;
  img {
    vertical-align: bottom;
  }
`;

export const StyledSearchOutlined = styled(SearchOutlined)`
  position: absolute;
  right: 0px;
  top: 0px;
  margin-top: 20px;
  margin-right: 30px;
  font-size: 23px;
`;

// 1a. Search Modal Page

export const ModalSearchBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`;
export const ModalSearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: #6b6b6b;
  font-size: 16px;
`;

export const SearchInput = styled.input`
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

// 2a. Social Login Button
// KAKAO refer : 컨테이너 #FEE500 / 심볼 #000000 / 레이블 #000000 85% / border radius 12px /

export const ModalLoginBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  cursor: auto;
`;



export const ModalLoginContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 13rem;
  color: #6b6b6b;
  font-size: 16px;
`;

export const BtnWrap = styled.div`
  position: absoulte;
  // display: block;
  text-align: center;
  border: 1px solid black;
  padding-top: 4.5rem;
  padding-bottom: 4.5rem;
  width: 400px;
  height: 350px;
`;

export const KakaoBtn = styled.button`
  margin-bottom: 1.2625rem;
  padding: 10px;
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #d7df01;
  color: black;
  background-color: #fee500;
  box-shadow: 1px 1px 1px grey;

  &:hover {
    cursor: pointer;
  }
`;
export const NaverBtn = styled.button`
  margin-bottom: 1.2625rem;
  padding: 10px;
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  border: 1px solid #15c654;
  color: #fff;
  background-color: #19ce60;
  box-shadow: 1px 1px 1px grey;

  &:hover {
    cursor: pointer;
  }
`;
export const GoogleBtn = styled.button`
  padding: 10px;
  width: 200px;
  height: 50px;
  font-weight: bold;
  border-radius: 4px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  color: #444;
  background-color: white;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

// 3a. Magazine FeedPreview

export const ModalFededBox = styled.div`
  position: relative;
  width: 80%;
  height: 750px;
  overflow-y: scroll;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  cursor: auto;
`;


// 4a. Preivew on MyPage

export const MyFeedPreview = styled(SearchOutlined)`
  position: relative;
  top: -85px;
  left: 190px;
  font-size: 20px;
`;


//5a. ActionBtn

export const Span = styled.span`
  display: block;
  width: 25px;
  height: 2px;
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
  & + & {
    margin-top: 4px;
  }
`;

export const SpanWrapper = styled.div`
  opacity: 1;
`;

export const Paragraph = styled.p`
  z-index: 5;
  visibility: hidden;
  position: absolute;
  text-align: center;
  width: 80px;
  top: 16px;
  right: 115%;
  font-size: 13px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.48);
  font-weight: bold;
  background-color: black;
  color: #ffffff;
`;

export const Hamburger = styled.div`
  z-index: 6;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 93.5%;
  bottom: 8%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.48);
  background-color: black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const Navigation = styled.div`
  z-index: 5;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: none;
  left: 93.5%;
  bottom: 10%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.48);
  background-color: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    font-size: 28px !important;
    background-color: wheat;
    box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.48);
    transition: all 0.25s ease-in-out;
  }
  &:hover ${Paragraph} {
    visibility: visible;
  }
`;

export const Switch = styled.div`
  > input {
    display: none;
  }
  > input:checked + label #hamburger {
    box-shadow: 7px 7px 10px 0px rgba(0, 0, 0, 0.48);
  }
  > input:checked + label ${SpanWrapper} {
    transition: transform 0.4s ease-in-out;
    transform: rotateZ(90deg);
  }
  > input:checked + label Span:nth-child(1) {
    transform: translateY(6px) rotateZ(45deg) scaleX(0.9);
  }
  > input:checked + label Span:nth-child(2) {
    opacity: 0;
  }
  > input:checked + label Span:nth-child(3) {
    transform: translateY(-6px) rotateZ(-45deg) scaleX(0.9);
  }
  > input:checked + label ${Navigation} {
    visibility: visible;
    opacity: 1;
  }
  > input:checked + label #mypage {
    transform: translateY(-125%);
    font-size: 25px;
  }
  > input:checked + label #createMagazine {
    transform: translateY(-250%);
    font-size: 25px;
  }
  >input: checked + label #createFeed {
    transform: translateY(-375%);
    font-size: 25px;
  }
`;
