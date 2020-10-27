import * as React from "react";
import { useEffect } from "react";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { signFail, signSuccess } from "./Modules/auth";
import { oauthApi } from "./Api/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const result = await oauthApi();

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
