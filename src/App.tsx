import React, { useEffect } from "react";
import Routes from "./Routes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signFail, signSuccess } from "./Modules/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:4000/oauth", {
        withCredentials: true,
      });

      if (!result) {
        dispatch(signFail());
      } else {
        if (!result.data.exist) {
          dispatch(signFail());
        } else {
          dispatch(signSuccess());
        }
      }
    })();
  }, []);

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
