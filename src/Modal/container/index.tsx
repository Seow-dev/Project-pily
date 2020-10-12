import React, {useState} from 'react'
import {Search} from '../component/Search';
import {Login} from '../component/Login';
import {SearchOutlined} from '@ant-design/icons';



export const Modalpage = () =>{
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);
  
  return(
    <div>
      {/* <Login /> */}

      <SearchOutlined 
        onClick={toggleModal} 
        style={{
          position:'absolute', 
          right:'0px', 
          top:'0px',
          marginTop:'20px',
          marginRight:'30px',
          fontSize:'23px'
      }} />
      
      <Search
        title={'Search'}
        isOpen={isModalOpen}
        onClose={toggleModal}
      />
    </div>
  )
}
// mainpage에 필요한 ui 컴포넌트를 모아서 api, 데이터 내려주기 등을 하는 메인 컴포넌트 