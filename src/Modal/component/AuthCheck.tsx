import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function AuthCheck({ match }: RouteComponentProps<{ exist: string }>) {
  const param = match.params;
  useEffect(() => {
    if (JSON.parse(param.exist)) {
      window.opener.location.href = "/";
    } else {
      window.opener.document.querySelector("#hidden").click();
    }
    window.close();
  }, []);

  return <div>로딩 중...</div>;
}
export default withRouter(AuthCheck);

export function SignoutCheck() {
  useEffect(() => {
    window.opener.location.href = "/";
    window.close();
  }, []);
  return <></>;
}
