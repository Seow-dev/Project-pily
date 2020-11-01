import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { media } from "../../Common/DeviceSize";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import "../../Common/GlobalStyles";
import { DatePicker, Select } from "antd";
/*
  0a. General Modal
  1a. Search Modal Page
  2a. Social Login Page
  2b. Social SignUp Page
  3a. Magazine FeedPreview
  4a. Preivew on MyPage
  5a. ActionBtn
*/

// 0a. General Modal
export const LoginModal = styled.a`
  position: absolute;
  font-family: "Noto Sans KR", sans-serif;
  top: 20px;
  right: 85px;
  font-size: 1.2rem;
  font-weight: 600;
  color: #343a40;
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
  min-width: 500px;
`;
export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: black;
  font-size: 30px;
  word-break: break-all;
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
  right: 4px;
  top: 5px;
  margin-top: 20px;
  margin-right: 30px;
  font-size: 1.4rem;
`;

// 1a. Search Modal Page
export const ModalSearchBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`;
// background-image: url("/image/login_background.png");
//   background-size: 100% 100%;
export const SearchParagraph = styled.p`
  font-size: 2rem;
  color: grey;
  margin-top: -10rem;
  padding-bottom: 4rem;
  min-width: 500px;
`;
export const SearchB1 = styled.b`
  font-weight: 500;
  color: black;
`;
export const SearchB2 = styled.b`
  font-family: "Abril Fatface", cursive;
  font-weight: 500;
  color: black;
  font-size: 2.5rem;
  margin-left: 0.8rem;
`;

export const ModalSearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6b6b;
  font-size: 16px;
  ${media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const SearchInput = styled.input`
  height: 50px;
  font-size: 30px;
  width: 50rem;
  color: black;
  border: none;
  border-bottom: 2px solid #463333;
  text-indent: 0.8rem;
  &:hover {
    border-bottom-width: 3px;
  }
  ${media.tablet} {
    width: 35rem;
    font-size: 26px;
  }
`;
export const ModalSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  margin-top: 4rem;
  width: 50rem;

  ${media.tablet} {
    width: 35rem;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  &:hover {
    cursor: pointer;
  }
`;


export const ModalSearchOptions = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  width: 100%;
  margin-top: 1rem;

  & ${StyledDatePicker} {
    width: 75%;
    height: 36px;
    font-size: 20px;
    border: none;
    border-bottom: 2px solid black;
    text-indent: 0.5rem;
    color: black;

    &:hover {
      border-bottom: 3px solid black;
      cursor: pointer;
    }
    & input {
      font-size: 2rem;
      padding-bottom: 0.5rem;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    & ${StyledDatePicker} {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
`;

export const SearchBtn = styled.button`
  width: 10rem;
  font-size: 1.2rem;
  font-weight: border;
  border-radius: 5px;
  padding: 8px 15px;
  &: hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
  ${media.tablet} {
    width: 100%;
  }
`;

// 2a. Social Login Button
export const ModalLoginBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-image: url("/image/login_background.png");
  background-size: 100% 100%;
`;
export const ModalLoginContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #6b6b6b;
`;
export const BtnWrap = styled.div`
  border: 3px solid white;
  width: 25rem;
  height: 30rem;
`;

export const LoginLogo = styled.img`
  padding-top: 1rem;
  width: 20%;
  border-radius: 50%;
`;

export const LoginParagraph = styled.p`
  display: block;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-family: "Nanum Myeongjo", serif;
  font-size: 1.5rem;
  letter-spacing: -1px;
  color: #000;
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
  font-size: 16px;
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

// 2b. Social SignUp Page

export const SignUpBox = styled.div`
  // position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("/image/signUp_background.jpg");
  background-size: 100% 100%;
`;
export const SignUpWrapper = styled.div`
  flex-direction: column;
  padding-bottom: 20rem;
`;
export const SignUpInput = styled.input<{ valid?: boolean }>`
  color: ${props => (props.valid ? "black" : "red")};
  border: none;
  border-bottom: 2px solid #463333;
  text-indent: 0.4rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  height: 40px;
  font-size: 20px;
  width: 40rem;
  text-indent: 0.8rem;
  &:hover {
    border-bottom: 3px solid #463333;
  }

  ${media.tablet} {
    font-size: 18px;
    width: 23.5rem;
  }
`;
export const SignUpBtnWrapper = styled.div`
  text-align: center;
`;

styled(SearchOutlined);
export const SignUpCancel = styled(FcCancel)`
  position: relative;
  font-size: 30px;
  top: 0.6rem;
  margin-right: 5px;
`;
export const SignUpCheck = styled(FcCheckmark)`
  position: relative;
  font-size: 30px;
  top: 0.6rem;
  margin-right: 5px;
`;

export const SignUpCancelBtn = styled.button`
  width: 11rem;
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;

  &: hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;
export const SignUpBtn = styled.button<{ disabled?: boolean }>`
  width: 11rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: white;

  &: hover {
    color: ${props => (props.disabled ? "black" : "white")};
    background-color: ${props => (props.disabled ? "white" : "black")};
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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
  top: -35%;
  left: calc(100% - 35px);
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
  right: calc(100% - 98.5%);
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
  right: calc(100% - 98%);
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
