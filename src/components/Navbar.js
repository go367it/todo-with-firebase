/** @jsxImportSource @emotion/react */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link
            css={css`
              text-decoration: none;
              color: inherit;
            `}
            to="/login"
          >
            <Button type="text">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
