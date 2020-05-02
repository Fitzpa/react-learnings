import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const NavBar = () => {
  const [padding, setPadding] = useState(15);
  return (
    // eslint-disable-next-line
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.primary};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 3px solid transparent;
          &:hover {
            border-bottom: 3px solid ${colors.secondary};
          }
        `}
        aria-label="logo"
        role="img"
      >
        🦝
      </span>
    </header>
  );
};

export default NavBar;
