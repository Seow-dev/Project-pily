import React, { useEffect } from "react";
import Routes from "./Routes";
import axios from "axios";

function App() {
  useEffect(() => {
    // 인증 관련 처리 localhost:4000/oauth
    // { exist: true/false } -> true: 로그인/회원가입 완료, false: 회원가입이 안된 상태
    // false -> 인증 자체가 안 된 상태 ()()
    // (async () => {
    //   const result = await axios.get("http://localhost:4000/oauth", {
    //     withCredentials: true,
    //   });
    //   console.log(result);
    //   // userData dispatch code here
    // })();
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
