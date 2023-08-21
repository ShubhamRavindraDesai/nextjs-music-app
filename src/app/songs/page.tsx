import React from "react";
import { Box } from "@mui/material";
import SongsContainer from "@/components/SongsContainer";

const Home = async (): Promise<JSX.Element> => {
  return (
    <Box>
      <SongsContainer />
    </Box>
  );
};

export default Home;
