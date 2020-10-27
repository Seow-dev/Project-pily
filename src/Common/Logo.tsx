import * as React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/">
      <span style={{ position: "relative", top: "0.5rem", left: "1rem" }}>
        Pily Logo
      </span>
    </Link>
  );
};
