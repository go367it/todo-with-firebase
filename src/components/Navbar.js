/** @jsxImportSource @emotion/react */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        css={css`
          background: white;
          color: black;
          box-shadow: none;
        `}
      >
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Weather
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
