/** @jsxImportSource @emotion/react */
import React from "react";
import Box from "@mui/material/Box";
import { css } from "@emotion/react";

const Notfound = () => {
  return (
    <div
      css={css`
        display: flex;
        padding: 1rem;
        justify-content: center;
        justify-items: center;
      `}
    >
      <Box
      css={css`
      width: 600px;
      padding: 1rem;
      text-align: center;
      border: 1px solid;
      `}
      >
          404! Not found
      </Box>
    </div>
  );
};

export default Notfound;
