import styled from "styled-components";



/*
  0. General Modal
  1. Search Modal Page
  2. Social Login Page
*/



// 0. General Modal

export const LoginModal = styled.a`
  position: absolute;
  top: 21px;
  right: 65px;
  fontsize: 15px;
  &:hover {
    color: #ff0000;
  }
`;


// 1. Search Modal Page

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
export const ModalBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  background-color: #fff;
`;
export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #9e25fc;
  font-size: 30px;
`;
export const ModalSearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  color: #6b6b6b;
  font-size: 16px;
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
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
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





// 2. Social Login Button 
// KAKAO refer : 컨테이너 #FEE500 / 심볼 #000000 / 레이블 #000000 85% / border radius 12px / 

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
  text-align : center;
  border: 1px solid black;
  padding-Top: 4.5rem;
  padding-Bottom: 4.5rem;
  width: 400px;
  height: 350px;
`

export const KakaoBtn = styled.button`
   margin-Bottom : 1.2625rem;
   padding: 10px;
   width: 200px;
   height: 50px;
   font-size:16px;
   font-weight:bold;
   border-radius: 4px;
   border:1px solid #D7DF01;
   color: black;
   background-color: #FEE500;
   box-shadow: 1px 1px 1px grey;

   &:hover {
     cursor : pointer;
   }
`
export const NaverBtn = styled.button`
margin-Bottom : 1.2625rem;
   padding: 10px;
   width: 200px;
   height: 50px;
   font-size:16px;
   font-weight:bold;
   border-radius: 4px;
   border:1px solid #15c654;
   color: #fff;
   background-color: #19ce60;
   box-shadow: 1px 1px 1px grey;

   &:hover {
    cursor : pointer;
  }
`
export const GoogleBtn = styled.button`
   padding: 10px;
   width: 200px;
   height: 50px;
   font-weight:bold;
   border-radius: 4px;
   border:thin solid #888;
   box-shadow: 1px 1px 1px grey;
   color: #444;
   background-color: white;
   white-space: nowrap;

   &:hover {
    cursor : pointer;
  }
`





