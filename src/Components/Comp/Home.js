import React from "react";
import { Box, Typography } from "@mui/material";
import { display } from "@mui/system";
const Home = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        justifyItems="center"
        alignItems={"center"}
      >
        <Typography variant="h1" color={"#acd"}>
          Book store
        </Typography>
        <Typography variant="p">Made by MERN stack</Typography>
      </Box>
    </div>
  );
};

export default Home;
