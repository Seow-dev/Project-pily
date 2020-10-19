import React, { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

function AuthCheck({ match, history }: RouteComponentProps<{ exist: string }>) {
  useEffect(() => {
    if (JSON.parse(match.params.exist)) {
      window.opener.location.href = "/";
    } else {
      window.opener.document.querySelector("#hidden").click();
    }
    window.close();
  }, []);

  return <div>로딩 중...</div>;
}

export default withRouter(AuthCheck);
