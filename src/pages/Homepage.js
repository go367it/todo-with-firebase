/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true); // for showing the loading status
  const [currentTemprature, setCurrentTemprature] = useState(''); // for string current weather temp

  // function for calling weather api for getting the weather data
  const weatherDetails = () => {
    fetch("http://ipinspector.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    weatherDetails();
  }, []);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        justify-items: center;
      `}
    >
      <Box
        className="currentTemprature"
        css={css`
          padding: 5px;
          width: 600px;
          display: flex;
          justify-content: center;
          justify-items: center;
          border: 1px gray solid;
          border-radius: 5px;
          box-sizing: border-box;
          box-shadow: 10px 10px 100px 10px rgba(205, 205, 205, 0.5);
        `}
      >
        {isLoading ? (
          <div css={css`
          text-align: center;
          `}>
            <CircularProgress />
            <br/>
            <span>
              Loading ....
            </span>
          </div>
        ) : (
          <div></div>
        )}
      </Box>
    </div>
  );
};

export default Homepage;
