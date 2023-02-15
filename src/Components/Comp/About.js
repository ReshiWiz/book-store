import React from "react";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        marginTop={"5rem"}
      >
        <Typography variant="h2">This is a CURD application</Typography>
        <Typography
          variant="h3"
          fontSize={"18px"}
          sx={{ fontFamily: "inherit" }}
        >
          By MERN stack coved all possible fetches like, Add, Update, Delete,
        </Typography>
      </Box>
    </div>
  );
};

export default About;
